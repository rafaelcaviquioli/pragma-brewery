import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import defaultReducer from './default-reducer';

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default (preloadedState) => {
  const rootReducer = combineReducers({ defaultReducer });
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
};
