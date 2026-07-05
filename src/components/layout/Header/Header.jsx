import { useSelector } from "react-redux";
import { MdLogout, MdMenu } from "react-icons/md";
import { useAuth } from "../../../hooks/useAuth.js";
import { getInitials } from "../../../utils/helpers.js";
import "./Header.css";

const Header = ({ onMenuClick = () => {} }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuth();

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-left">
        <button className="sidebar-menu-btn" onClick={onMenuClick}>
          <MdMenu />
        </button>
        <span className="dashboard-header-title">Welcome back, {currentUser?.name?.split(" ")[0]}</span>
      </div>

      <div className="dashboard-header-actions">
        <div className="dashboard-avatar">{getInitials(currentUser?.name)}</div>
        <button className="dashboard-logout" onClick={logout} title="Logout">
          <MdLogout />
        </button>
      </div>
    </header>
  );
};

export default Header;
