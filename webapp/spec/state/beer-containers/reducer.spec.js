import beerContainers from 'state/beer-containers/reducer';
import { WS_BEER_CONTAINER_TEMPERATURE_CREATED } from 'state/ws-actions';

describe('beerContainersReducer', () => {
  it('returns the initial state', () => {
    const state = undefined;
    const action = {};

    expect(beerContainers(state, action)).toEqual({
      containers: [
        { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false },
        { beer: 'Beer 2', temperature: null, minTemperature: 5, maxTemperature: 6, outOfRange: false },
        { beer: 'Beer 3', temperature: null, minTemperature: 4, maxTemperature: 7, outOfRange: false },
        { beer: 'Beer 4', temperature: null, minTemperature: 6, maxTemperature: 8, outOfRange: false },
        { beer: 'Beer 5', temperature: null, minTemperature: 3, maxTemperature: 5, outOfRange: false },
        { beer: 'Beer 6', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false }
      ]
    });
  });

  describe(`#${WS_BEER_CONTAINER_TEMPERATURE_CREATED}`, () => {
    it('updates container\'s temperature', () => {
      const state = {
        containers: [
          { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false }
        ]
      };

      const action = { type: WS_BEER_CONTAINER_TEMPERATURE_CREATED, payload: { beer: 'Beer 1', temperature: 5 } };

      expect(beerContainers(state, action)).toEqual({
        containers: [
          { beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false }
        ]
      });
    });

    it('updates container\'s temperature only when match the beer name', () => {
      const state = {
        containers: [
          { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false },
          { beer: 'Beer 2', temperature: null, minTemperature: 5, maxTemperature: 6, outOfRange: false }
        ]
      };

      const action = { type: WS_BEER_CONTAINER_TEMPERATURE_CREATED, payload: { beer: 'Beer 1', temperature: 5 } };

      expect(beerContainers(state, action)).toEqual({
        containers: [
          { beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false },
          { beer: 'Beer 2', temperature: null, minTemperature: 5, maxTemperature: 6, outOfRange: false }
        ]
      });
    });

    describe('out of range', () => {
      it('sets out of range when temperature is lower than min temperature', () => {
        const state = {
          containers: [
            { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false },
          ]
        };

        const notOutOfRange = {
          type: WS_BEER_CONTAINER_TEMPERATURE_CREATED,
          payload: { beer: 'Beer 1', temperature: 4 }
        };

        const outOfRange = {
          type: WS_BEER_CONTAINER_TEMPERATURE_CREATED,
          payload: { beer: 'Beer 1', temperature: 3 }
        };

        expect(beerContainers(state, notOutOfRange)).toMatchObject({ containers: [{ outOfRange: false }] });
        expect(beerContainers(state, outOfRange)).toMatchObject({ containers: [{ outOfRange: true }] });
      });

      it('sets out of range when temperature is higher than max temperature', () => {
        const state = {
          containers: [
            { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false },
          ]
        };

        const notOutOfRange = {
          type: WS_BEER_CONTAINER_TEMPERATURE_CREATED,
          payload: { beer: 'Beer 1', temperature: 6 }
        };

        const outOfRange = {
          type: WS_BEER_CONTAINER_TEMPERATURE_CREATED,
          payload: { beer: 'Beer 1', temperature: 7 }
        };

        expect(beerContainers(state, notOutOfRange)).toMatchObject({ containers: [{ outOfRange: false }] });
        expect(beerContainers(state, outOfRange)).toMatchObject({ containers: [{ outOfRange: true }] });
      });
    });
  });
});
