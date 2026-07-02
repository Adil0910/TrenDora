import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";
import DashboardLayout from "../components/layout/DashboardLayout";

import Landing from "../pages/Landing/Landing.jsx";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Chat from "../pages/Chat/Chat.jsx";
import ResumeAnalyzer from "../pages/ResumeAnalyzer/ResumeAnalyzer.jsx";
import CodeGenerator from "../pages/CodeGenerator/CodeGenerator.jsx";
import BugFixer from "../pages/BugFixer/BugFixer.jsx";
import Settings from "../pages/Settings/Settings.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/code-generator" element={<CodeGenerator />} />
          <Route path="/bug-fixer" element={<BugFixer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
