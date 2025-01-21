import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Router from '@/router.tsx';

import './index.css';

if ('serviceWorker' in navigator && !import.meta.env.DEV) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch((error) => console.error(error));
  });
}

const root = document.getElementById('root');

if (root) {
  hydrateRoot(
    root,
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  throw new Error('Container not found, must be HTMLElement');
}
