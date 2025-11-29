import { isRouteErrorResponse, Link, useRouteError } from "react-router";

function ErrorPage({ error }: { error?: Error }) {
  const routeError = useRouteError();
  let errorMessage = error?.message;
  if (isRouteErrorResponse(routeError)) {
    errorMessage = routeError.data;
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <h1 className="text-9xl font-black text-slate-800">404</h1>
      <div className="absolute">
        <p className="text-2xl font-bold text-slate-100">{errorMessage ?? "Unknown Error"}</p>
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
