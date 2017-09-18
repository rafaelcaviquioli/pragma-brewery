import { handleActions } from 'redux-actions';
import { WS_BEER_CONTAINER_TEMPERATURE_UPDATED as TEMPERATURE_UPDATED } from 'state/ws-actions';

const initialState = {
  containers: [
    { id: 1, beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false },
    { id: 2, beer: 'Beer 2', temperature: null, minTemperature: 5, maxTemperature: 6, outOfRange: false },
    { id: 3, beer: 'Beer 3', temperature: null, minTemperature: 4, maxTemperature: 7, outOfRange: false },
    { id: 4, beer: 'Beer 4', temperature: null, minTemperature: 6, maxTemperature: 8, outOfRange: false },
    { id: 5, beer: 'Beer 5', temperature: null, minTemperature: 3, maxTemperature: 5, outOfRange: false },
    { id: 6, beer: 'Beer 6', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false }
  ]
};

const temperatureUpdatedReducer = (state, action) => {
  const containers = state.containers.map(updateTemperatureFor(action.payload));
  return { containers };
};

const updateTemperatureFor = ({ id, temperature }) => {
  return container => {
    if (container.id === id) {
      const outOfRange = temperature < container.minTemperature || temperature > container.maxTemperature;
      return { ...container, temperature, outOfRange };
    } else {
      return container;
    }
  };
};

const reducers = {
  [TEMPERATURE_UPDATED]: temperatureUpdatedReducer,
};

export default handleActions(reducers, initialState);
