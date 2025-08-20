import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

console.log('Main.jsx loaded'); // Debug log
const root = document.getElementById('root');
if (!root) {
  console.error('Root element not found');
} else {
  console.log('Rendering App...'); // Debug log
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
