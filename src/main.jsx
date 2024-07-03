import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ContextProvider from './context/Context.jsx';
import './index.css';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);

