import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Modal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root'); // This should be set here

root.render(
  <React.StrictMode>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
