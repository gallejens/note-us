import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './styles/index.scss';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Failed to get root element');

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
