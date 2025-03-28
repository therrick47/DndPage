import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import HomePage from './pages';
import CharCreationPage from './pages/CharCreationPage';
import { KingdomCreation } from './components/Kingdom/KingdomCreation';
import { KingdomActions } from './components/Kingdom/KingdomActions';

const router = createBrowserRouter(
  [
    {
      Component: App,
      children: [
        {
          path: '/',
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
              path: 'kingdom',
              children: [
                {
                  path: 'creation',
                  Component: KingdomCreation,
                },
                {
                  path: 'actions',
                  Component: KingdomActions,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/DndPage',
  }
);
console.log(router.basename);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
