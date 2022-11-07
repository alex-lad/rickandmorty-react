import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Hero from './components/hero/Hero';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'hero/:heroId',
    element: <Hero />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
