import { Link, useParams } from "react-router-dom";

const NotFound = () => {
  const { lang } = useParams();
  const currentLang = lang || "en";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="mb-8 text-gray-600">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to={`/${currentLang}`}
        className="px-6 py-3 bg-mainLight text-white rounded hover:bg-main transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
