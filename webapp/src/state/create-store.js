import { createStore } from 'redux';
import reducer from './reducer';
import middlewares from './middlewares';

export default (preloadedState) => {
  return createStore(reducer, preloadedState, middlewares);
};
