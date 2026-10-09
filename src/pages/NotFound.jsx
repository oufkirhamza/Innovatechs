import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-teta text-8xl font-bold">404</p>
      <h1 className="text-3xl font-semibold mt-4">Page not found</h1>
      <p className="text-[#f5f5f5b4] mt-3 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <Link
          to="/"
          className="btn btn-primary"
        >
          Back to home
        </Link>
        <Link
          to="/#contact"
          className="btn btn-secondary"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
