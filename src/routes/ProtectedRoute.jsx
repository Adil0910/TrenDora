import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/ui/Loader";

const ProtectedRoute = () => {
  const { isAuthenticated, sessionChecked } = useSelector((state) => state.auth);

  if (!sessionChecked) {
    return <Loader fullPage />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
