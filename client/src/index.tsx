import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {store} from '../src/app/store' ;
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
