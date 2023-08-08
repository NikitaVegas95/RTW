import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import '../client/styles/index.css';

const container = document.getElementById('root');
const root = ReactDOM.hydrateRoot(container, <App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
