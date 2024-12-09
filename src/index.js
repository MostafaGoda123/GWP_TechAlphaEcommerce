import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ProductContextProvider from './context/allProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </HashRouter>
  </React.StrictMode>
);

