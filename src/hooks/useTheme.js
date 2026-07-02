import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice.js";

export const useTheme = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleTheme());

  return { mode, toggle };
};
