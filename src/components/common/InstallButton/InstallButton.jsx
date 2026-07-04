import { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { useInstallPrompt } from "../../../hooks/useInstallPrompt.js";
import Button from "../../ui/Button";

const isIos = () => /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
const isInStandaloneMode = () => window.matchMedia("(display-mode: standalone)").matches;

const InstallButton = () => {
  const { canInstall, promptInstall } = useInstallPrompt();
  const [showIosHint, setShowIosHint] = useState(false);

  const iosAndNotInstalled = isIos() && !isInStandaloneMode();

  useEffect(() => {
    if (iosAndNotInstalled) setShowIosHint(false);
  }, [iosAndNotInstalled]);

  if (!canInstall && !iosAndNotInstalled) return null;

  if (iosAndNotInstalled) {
    return (
      <div style={{ position: "relative" }}>
        <Button variant="secondary" onClick={() => setShowIosHint((v) => !v)}>
          <MdDownload style={{ marginRight: 4, verticalAlign: "middle" }} />
          Install App
        </Button>
        {showIosHint && (
          <div
            style={{
              position: "absolute",
              top: "110%",
              right: 0,
              background: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
              borderRadius: 8,
              padding: "10px 14px",
              fontSize: 13,
              color: "var(--text-primary)",
              width: 220,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              zIndex: 100,
            }}
          >
            Tap the Share icon, then "Add to Home Screen" to install this app.
          </div>
        )}
      </div>
    );
  }

  return (
    <Button variant="secondary" onClick={promptInstall}>
      <MdDownload style={{ marginRight: 4, verticalAlign: "middle" }} />
      Install App
    </Button>
  );
};

export default InstallButton;
