import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes.jsx";
import Loader from "./components/ui/Loader";
import { getProfile } from "./services/authService.js";
import { setUser } from "./store/authSlice.js";
import "./styles/global.css";

function App() {
  const dispatch = useDispatch();
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const { data } = await getProfile();
        dispatch(setUser(data.data));
      } catch (error) {
        // No valid session, user stays logged out
      } finally {
        setCheckingSession(false);
      }
    };
    restoreSession();
  }, [dispatch]);

  if (checkingSession) {
    return <Loader fullPage />;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
