import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { App } from './App';


const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Failed to get root element');

const root = ReactDOM.createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
