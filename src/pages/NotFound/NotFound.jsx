import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
