import { useNavigate } from "react-router-dom";
import Navigator from "./navigationHistory";

// Set NavigationSetter between BrowserRouter on index.js

export const NavigationSetter = () => {
  Navigator.navigate = useNavigate();
  return null;
};

export default NavigationSetter;
