/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Modal from "react-modal";
import App from './App';
import './index.css';
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root');

root.render(
  <React.StrictMode> 
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </GoogleOAuthProvider>
);
