import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AuthListener } from './providers/AuthListener';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { HomeLayout } from './layouts/HomeLayout';
import { ErrorPage } from './pages/errorPage';
import { Home } from './pages/home';
import { LogIn } from './pages/logIn';
import { SignOut } from './pages/signOut';
import { SignUp } from './pages/signUp';
import { RememberMe } from './pages/rememberMe';
import { AboutPage } from './pages/aboutPage';
import { GlobalAccount } from './providers/GlobalAccount';
import { Compose } from './pages/upload';
import { Details } from './pages/detail';
import { MyPage } from './pages/myPage';

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
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'compose', element: <Compose /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'detail', element: <Navigate to="/" /> },
      { path: 'detail/:haikuId', element: <Details /> },
    ],
  },

  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'signup', element: <SignUp /> },
      { path: 'login', element: <LogIn /> },
      { path: 'signout', element: <SignOut /> },
      { path: 'forget', element: <RememberMe /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <AuthListener>
          <GlobalAccount>
            <CssBaseline />
            <RouterProvider router={router} />
          </GlobalAccount>
        </AuthListener>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
