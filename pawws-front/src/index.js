/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RootComponent from './components/RootComponent';
import './styles/style.scss';

const Root = (
  <Router history={createBrowserHistory()} >
    <RootComponent />
  </Router>
);

const start = () => {
  ReactDOM.render(Root, document.querySelector('.contents'));
};

start();
