import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const legacyJQuery = require('./assets/js/jquery-3.6.0.min.js');
(window as any).$ = (window as any).$ || (window as any).jQuery || legacyJQuery;
(window as any).jQuery = (window as any).jQuery || (window as any).$ || legacyJQuery;
require('./assets/js/common-ui.js');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
