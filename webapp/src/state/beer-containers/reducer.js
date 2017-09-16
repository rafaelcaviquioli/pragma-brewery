import { handleActions } from 'redux-actions';

const initialState = {
  containers: [
    { name: 'Beer​ 1', temperature: '5', minTemperature: '4', maxTemperature: '6' },
    { name: 'Beer​ 2', temperature: '5', minTemperature: '5', maxTemperature: '6' },
    { name: 'Beer​ 3', temperature: '5', minTemperature: '4', maxTemperature: '7' },
    { name: 'Beer​ 4', temperature: '5', minTemperature: '6', maxTemperature: '8' },
    { name: 'Beer​ 5', temperature: '5', minTemperature: '3', maxTemperature: '5' },
    { name: 'Beer​ 6', temperature: '5', minTemperature: '4', maxTemperature: '6' },
  ]
};

const reducers = {};

export default handleActions(reducers, initialState);
