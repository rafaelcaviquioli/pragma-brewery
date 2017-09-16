import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default applyMiddleware(...middlewares);
