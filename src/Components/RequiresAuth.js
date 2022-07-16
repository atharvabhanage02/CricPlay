import { useAuth } from "../Context/Auth/auth-context";
import { Navigate } from "react-router-dom";
const RequiresAuth = ({ children }) => {
  const {
    auth: { isLogIn },
  } = useAuth();
  return isLogIn ? children : <Navigate to="/login" />;
};
export { RequiresAuth };
