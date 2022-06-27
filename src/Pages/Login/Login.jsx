import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./login.css";
import { loginHandler } from "../../Utils/loginHandler";
import { useAuth } from "../../Context/Auth/auth-context";
import { useState } from "react";
const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const guestLogin = {
    email: "abc@gmail.com",
    pass: "Atharva123",
  };
  return (
    <div>
      <Navbar />
      <div class="login-wrapper">
        <div class="login">
          <h1>Login</h1>
          <div class="login-credentials">
            <div class="email">
              <p for="email-label">Email Address</p>
              <input
                type="email"
                class="email-validate"
                id="email-label"
                placeholder="Enter Valid Email ID"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div class="password">
              <p for="password-label">Password</p>
              <input
                type="password"
                class="pswrd-validate"
                id="password-label"
                onChange={(e) => setUser({ ...user, pass: e.target.value })}
                required
              />
            </div>
            <div class="reset-details">
              <div>
                <input type="checkbox" class="checkbox" />
                Remember Me
              </div>

              <a href="" class="forgot-pswrd-link">
                Forget your Password?
              </a>
            </div>
            <button
              class="login-btn"
              onClick={() => loginHandler(user, setAuth, navigate)}
            >
              Login
            </button>
            <button
              class="login-btn login-guest-btn"
              onClick={(e) => {
                e.preventDefault();
                loginHandler(guestLogin, setAuth, navigate);
              }}
            >
              Login as Guest
            </button>
            <Link class="have-account-link" to="/Signup">
              Create new Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Login };
