import { isRouteErrorResponse, Link, useLocation, useRouteError } from "react-router";

function ErrorPage({ error }: { error?: Error }) {
  const routeError = useRouteError();
  const location = useLocation();
  let errorMessage = error?.message;
  let isNotFound = false;

  if (isRouteErrorResponse(routeError)) {
    errorMessage = routeError.data || routeError.statusText;
    if (routeError.status === 404) {
      isNotFound = true;
      errorMessage = "Page Not Found";
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <h1 className="text-9xl font-black text-slate-800">404</h1>
      <div className="absolute flex flex-col items-center gap-4">
        <p className="text-2xl font-bold text-slate-100">{errorMessage ?? "Unknown Error"}</p>
        {isNotFound && (
          <p className="text-slate-400">
            The requested URL <code className="rounded bg-slate-900 px-2 py-1 text-blue-400">{location.pathname}</code> was not found.
          </p>
        )}
        <Link
          to="/"
          className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
