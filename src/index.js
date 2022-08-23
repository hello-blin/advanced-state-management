import React from 'react';
import {AppState} from './AppState'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppState>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppState>
);


