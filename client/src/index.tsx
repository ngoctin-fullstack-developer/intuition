import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { store } from '../src/app/store';
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter>
    <App />
  </BrowserRouter> */}
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
