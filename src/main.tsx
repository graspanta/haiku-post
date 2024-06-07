import React from 'react';
import ReactDOM from 'react-dom/client';
// import { AuthListener } from './providers/AuthListener';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './layouts/HomeLayout';
import { ErrorPage } from './pages/errorPage';
import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AuthListener> */}
    <RouterProvider router={router} />
    {/* </AuthListener> */}
  </React.StrictMode>,
);
