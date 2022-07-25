import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container py-4">
      <h1 className="display-5">Not Found</h1>
      <Link to="/" className="btn btn-primary btn-lg">
        Go to home
      </Link>
    </main>
  );
}

export default NotFound;
