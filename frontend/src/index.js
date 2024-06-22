import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/store";
import { Provider } from 'react-redux';
import "./i18n";


import axios from 'axios';
import { GetCookies } from './lib/Cookie';



//HTTP requests proxy
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${GetCookies()["usr_token"]}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
    </Provider>
  </React.StrictMode>
);


