import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import './styles/index.scss';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Failed to get root element');

const root = ReactDOM.createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
