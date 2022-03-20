import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import CartContextProvider from './context/CartContext';

ReactDOM.render(
  
  <React.StrictMode>
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
