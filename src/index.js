import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { name, version } from '../package.json';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Helmet>
      <title>{`${name} v${version}`}</title>
    </Helmet>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
