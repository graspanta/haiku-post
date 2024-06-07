import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText: string;
  message: string;
}

export const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
