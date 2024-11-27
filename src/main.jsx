/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById("root"));
// This should be set here

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId} >
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>

);
