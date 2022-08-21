import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { name, version } from './info';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Helmet>
      <title>{`${name} v${version}`}</title>
    </Helmet>
    <App name={name} version={version} />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
