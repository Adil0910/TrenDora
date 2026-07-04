import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import InstallButton from "../../common/InstallButton";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        AI SaaS
      </Link>

      <div className="navbar-actions">
        <InstallButton />
        {isAuthenticated ? (
          <Link to="/dashboard">
            <Button variant="primary">Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
