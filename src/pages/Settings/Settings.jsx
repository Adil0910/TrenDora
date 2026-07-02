import { useTheme } from "../../hooks/useTheme.js";
import Button from "../../components/ui/Button";
import "./Settings.css";

const Settings = () => {
  const { mode, toggle } = useTheme();

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Customize your experience.</p>

      <div className="settings-card">
        <div className="settings-row">
          <div>
            <h3>Theme</h3>
            <p>Currently using {mode} mode</p>
          </div>
          <Button variant="secondary" onClick={toggle}>
            Switch to {mode === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
