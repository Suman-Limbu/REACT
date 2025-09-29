import Link from "next/link";
import { HOME_ROUTE } from "./../constants/routes";
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl md:text-3xl font-light mt-4 text-gray-600">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href={HOME_ROUTE}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
