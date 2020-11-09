import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Routes from './pages/routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
