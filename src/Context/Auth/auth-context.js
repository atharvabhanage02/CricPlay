import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHandler } from "../../Utils/logoutHandler";

const AuthContext = createContext(null);
const isTokenPresent = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const [sidebar, showSidebar] = useState(true);

  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    isLogIn: isTokenPresent,
    tokenValue: localStorage.getItem("token"),
  });

  const logOutUser = async () => {
    logoutHandler();
    setAuth({ isLogIn: false });
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, logOutUser, sidebar, showSidebar }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
