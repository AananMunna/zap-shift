import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 text-red-800 p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">🚨 Oops!</h1>
        <h2 className="text-3xl font-semibold mb-2">Something went wrong</h2>

        {error?.status && (
          <p className="text-xl font-mono text-red-700 mb-1">
            <strong>Error Code:</strong> {error.status}
          </p>
        )}
        <p className="mb-6 text-gray-700">{error?.statusText || error?.message || "Unexpected Error"}</p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition font-semibold"
        >
          🏠 Back to Home
        </Link>
      </div>

      <div className="mt-10 opacity-30 text-xs">
        ZapShift | Error Handler
      </div>
    </div>
  );
};

export default ErrorPage;
