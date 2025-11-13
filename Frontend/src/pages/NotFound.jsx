import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center py-24">
    <h1 className="text-7xl font-extrabold text-highlight mb-4">404</h1>
    <p className="text-primary/80 text-lg mb-6">
      The page you’re looking for doesn’t exist.
    </p>
    <Link
      to="/"
      className="bg-primary text-white px-6 py-3 rounded-md hover:bg-highlight"
    >
      ← Back to Home
    </Link>
  </div>
);

export default NotFound;