import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter } from "react-router-dom";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './style/main.scss';

import App from './components/app';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App>
        
      </App>    
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
