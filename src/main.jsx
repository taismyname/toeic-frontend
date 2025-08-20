import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

console.log('main.jsx loaded and running');

const root = document.getElementById('root');
if (!root) {
  console.error('No root element found');
} else {
  console.log('Mounting App to root...');
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
