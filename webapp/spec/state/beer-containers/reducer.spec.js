import beerContainers from 'state/beer-containers/reducer';

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
});
