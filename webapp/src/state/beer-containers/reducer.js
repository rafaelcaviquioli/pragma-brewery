import { handleActions } from 'redux-actions';
import { WS_BEER_CONTAINER_TEMPERATURE_CREATED as TEMPERATURE_CREATED } from 'state/ws-actions';

const initialState = {
  containers: [
    { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false },
    { beer: 'Beer 2', temperature: null, minTemperature: 5, maxTemperature: 6, outOfRange: false },
    { beer: 'Beer 3', temperature: null, minTemperature: 4, maxTemperature: 7, outOfRange: false },
    { beer: 'Beer 4', temperature: null, minTemperature: 6, maxTemperature: 8, outOfRange: false },
    { beer: 'Beer 5', temperature: null, minTemperature: 3, maxTemperature: 5, outOfRange: false },
    { beer: 'Beer 6', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false }
  ]
};

const reducers = {
  [TEMPERATURE_CREATED]: updateContainerTemperature,
};

function updateContainerTemperature(state, action) {
  const containers = state.containers
    .map(container => {
      if (container.beer === action.payload.beer) {
        const temperature = action.payload.temperature;
        const outOfRange = temperature < container.minTemperature || temperature > container.maxTemperature;
        return { ...container, temperature: action.payload.temperature, outOfRange };
      } else {
        return container;
      }
    });

  return { containers };
}

export default handleActions(reducers, initialState);
