import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store/index';
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="dev-25xunbmkuwt4vm6n.us.auth0.com"
    clientId="R1zkLl74XDbnkngyhSD2FaWWBBfPuvfy"
    redirectUri={window.location.origin}
  // audience="https://dev-25xunbmkuwt4vm6n.us.auth0.com/api/v2/"
  // scope="read:current_user update:current_user_metadata"
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider >,
  document.getElementById('root')
);

