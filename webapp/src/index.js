import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/index';
import createWsStore from './state/create-ws-store';

const AppOnRedux = (
  <Provider store={createWsStore()}>
    <App/>
  </Provider>
);

ReactDOM.render(AppOnRedux, document.getElementById('root'));
