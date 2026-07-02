import { MdChat, MdDescription, MdCode, MdBugReport } from "react-icons/md";
import Card from "../../components/ui/Card";
import "./Dashboard.css";

const features = [
  {
    icon: <MdChat />,
    title: "AI Chat",
    description: "Have a real-time conversation with your AI assistant.",
    to: "/chat",
  },
  {
    icon: <MdDescription />,
    title: "Resume Analyzer",
    description: "Upload your resume and get instant AI feedback.",
    to: "/resume-analyzer",
  },
  {
    icon: <MdCode />,
    title: "Code Generator",
    description: "Describe what you need, get production-ready code.",
    to: "/code-generator",
  },
  {
    icon: <MdBugReport />,
    title: "Bug Fixer",
    description: "Paste broken code and let AI find and fix the issue.",
    to: "/bug-fixer",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="dashboard-title">What would you like to do today?</h1>
      <div className="dashboard-grid">
        {features.map((feature) => (
          <Card key={feature.to} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
