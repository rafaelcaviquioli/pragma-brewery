import { handleActions } from 'redux-actions';

const initialState = {
  containers: [
    { beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6 },
    { beer: 'Beer 2', temperature: null, minTemperature: 5, maxTemperature: 6 },
    { beer: 'Beer 3', temperature: null, minTemperature: 4, maxTemperature: 7 },
    { beer: 'Beer 4', temperature: null, minTemperature: 6, maxTemperature: 8 },
    { beer: 'Beer 5', temperature: null, minTemperature: 3, maxTemperature: 5 },
    { beer: 'Beer 6', temperature: null, minTemperature: 4, maxTemperature: 6 }
  ]
};

const reducers = {
  ['WS_BEER_CONTAINER_TEMPERATURE_CREATED']: updateContainerTemperatureReducer,
};

function updateContainerTemperatureReducer(state, action) {
  const containers = state.containers
    .map(container => {
      if (container.beer === action.payload.beer) {
        return { ...container, temperature: action.payload.temperature };
      } else {
        return container;
      }
    });

  return { containers };
}

export default handleActions(reducers, initialState);
