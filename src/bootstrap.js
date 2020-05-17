import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './style/main.scss';

import history from "./history";

import App from './components/app';
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path="/" exact component={SignIn}/> 
            <Route path="/" exact component={SignUp}/> 
          </Switch>
        </App> 
      </Router>   
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
