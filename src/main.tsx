import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import HomePage from './pages';
import CharCreationPage from './pages/CharCreationPage';
import { Roadmap } from './components/Roadmap';

const router = createBrowserRouter(
  [
    {
      Component: App,
      children: [
        {
          path: 'DndPage',
          Component: Layout,
          children: [
            {
              path: '',
              Component: HomePage,
            },
            {
              path: 'charcreation',
              Component: CharCreationPage,
            },
            {
              path: 'roadmap',
              Component: Roadmap,
            },
          ],
        },
      ],
    },
  ],
  {
    // basename: '/DndPage',
  }
);
console.log(router.basename);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
