import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import { getProfile } from "./services/authService.js";
import { setUser, clearUser } from "./store/authSlice.js";
import "./styles/global.css";

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const { data } = await getProfile();
        dispatch(setUser(data.data));
      } catch (error) {
        dispatch(clearUser()); // marks sessionChecked true even on failure
      }
    };
    restoreSession();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
