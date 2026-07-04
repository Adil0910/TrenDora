import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, clearUser } from "../store/authSlice.js";
import { loginUser, registerUser, logoutUser } from "../services/authService.js";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useSelector((state) => state.auth);

  const login = async (credentials) => {
    const { data } = await loginUser(credentials);
    localStorage.setItem("token", data.data.token);
    dispatch(setUser(data.data));
    navigate("/dashboard");
  };

  const register = async (details) => {
    const { data } = await registerUser(details);
    localStorage.setItem("token", data.data.token);
    dispatch(setUser(data.data));
    navigate("/dashboard");
  };

  const logout = async () => {
    await logoutUser();
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/login");
  };

  return { currentUser, isAuthenticated, login, register, logout };
};
