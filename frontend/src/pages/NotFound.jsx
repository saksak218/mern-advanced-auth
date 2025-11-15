import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="place-items-center grid px-6 lg:px-8 py-24 sm:py-32 min-h-full">
      <div className="text-center">
        <p className="font-semibold text-emerald-400 text-5xl">404</p>
        <h1 className="mt-4 font-semibold text-white text-5xl sm:text-7xl text-balance tracking-tight">
          Page not found
        </h1>
        <p className="mt-6 font-medium text-gray-400 text-lg sm:text-xl/8 text-pretty">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex justify-center items-center gap-x-6 mt-10">
          <Link
            to="/"
            className="bg-linear-to-r from-green-500 hover:from-green-600 to-emerald-600 hover:to-emerald-700 shadow-xs px-3.5 py-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2 font-semibold text-white text-sm"
          >
            Go back home
          </Link>
          <Link to="#" className="font-semibold text-white text-sm">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
