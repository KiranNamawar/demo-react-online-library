import { isRouteErrorResponse, Link, useRouteError } from "react-router";

function ErrorPage({ error }: { error?: Error }) {
  const routeError = useRouteError();
  let errorMessage = error?.message;
  if (isRouteErrorResponse(routeError)) {
    errorMessage = routeError.data;
  }

  return (
    <>
      <h1>404</h1>
      <p>{errorMessage ?? "Unknown Error"}</p>
      <Link to="/">Go to Home</Link>
    </>
  );
}

export default ErrorPage;
