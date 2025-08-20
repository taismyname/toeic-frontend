import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

console.log('main.jsx loaded and running'); // Debug log
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('No root element found in document:', document.body.innerHTML);
} else {
  console.log('Root element found, attempting to render...');
  try {
    const root = createRoot(rootElement);
    console.log('Creating root succeeded, rendering App...');
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } catch (error) {
    console.error('Render error:', error);
  }
}
