import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

// Check if React 18 is available
if (typeof ReactDOM.createRoot === 'function') {
  // Use createRoot for React 18+
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Use ReactDOM.render for versions prior to React 18
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}
