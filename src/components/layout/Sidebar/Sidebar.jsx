import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdChat,
  MdDescription,
  MdCode,
  MdBugReport,
  MdSettings,
  MdClose,
} from "react-icons/md";
import "./Sidebar.css";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
  { to: "/chat", label: "Chat", icon: <MdChat /> },
  { to: "/resume-analyzer", label: "Resume Analyzer", icon: <MdDescription /> },
  { to: "/code-generator", label: "Code Generator", icon: <MdCode /> },
  { to: "/bug-fixer", label: "Bug Fixer", icon: <MdBugReport /> },
  { to: "/settings", label: "Settings", icon: <MdSettings /> },
];

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <button className="sidebar-close-btn" onClick={onClose}>
          <MdClose />
        </button>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "sidebar-link-active" : ""}`
              }
            >
              <span className="sidebar-icon">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
