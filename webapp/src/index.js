import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/index';
import createStore from './create-store';

const AppOnRedux = (
  <Provider store={createStore()}>
    <App/>
  </Provider>
);

ReactDOM.render(AppOnRedux, document.getElementById('root'));
