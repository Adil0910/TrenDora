import { MdDownload } from "react-icons/md";
import { useInstallPrompt } from "../../../hooks/useInstallPrompt.js";
import Button from "../../ui/Button";

const InstallButton = () => {
  const { canInstall, promptInstall } = useInstallPrompt();

  if (!canInstall) return null;

  return (
    <Button variant="secondary" onClick={promptInstall}>
      <MdDownload style={{ marginRight: 4, verticalAlign: "middle" }} />
      Install App
    </Button>
  );
};

export default InstallButton;
