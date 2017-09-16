import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/index';
import createNesStore from './state/create-nes-store';

const AppOnRedux = (
  <Provider store={createNesStore()}>
    <App/>
  </Provider>
);

ReactDOM.render(AppOnRedux, document.getElementById('root'));
