import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen px-6 text-center flex flex-col items-center justify-center gap-4 text-dark bg-neutral font-[Modernist]">
      <h2 className="text-6xl font-bold leading-none">404</h2>
      <h2 className="text-2xl font-semibold leading-none">Page Not Found</h2>
      <p className="max-w-md text-lg text-dark/85">
        Oops! This page doesn't exist or has been removed.
      </p>

      <div className="mt-2 flex gap-4">
        <Link
          to="/"
          className="p-2.5 px-6 rounded-md border border-brand text-brand bg-neutral"
        >
          Go Home
        </Link>
        <Link
          to="/purchase"
          className="p-2.5 px-6 rounded-md border border-brand text-neutral bg-brand"
        >
          Shop Furniture
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
