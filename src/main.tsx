import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { AuthListener } from './providers/AuthListener';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './layouts/HomeLayout';
import { ErrorPage } from './pages/errorPage';
import { Home } from './pages/home';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_END_POINT_ORIGIN,
});

const authLink = setContext(async () => {
  return {
    headers: {
      'x-hasura-admin-secret': import.meta.env.VITE_HASURA_SECRET_KEY,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
    <RecoilRoot>
      <ApolloProvider client={client}>
        {/* <AuthListener> */}
        <RouterProvider router={router} />
        {/* </AuthListener> */}
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
