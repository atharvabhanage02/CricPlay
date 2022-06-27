import { Navbar } from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "../Login/login.css";
const Signup = () => {
  return (
    <div>
      <Navbar />
      <div class="login-wrapper">
        <div class="login">
          <h1>SignUp</h1>
          <div class="login-credentials">
            <div class="user-name">
              <div class="first-name">
                <p>First Name</p>
                <input
                  type="text"
                  class="email-validate"
                  placeholder="First Name"
                />
              </div>
              <div class="last-name">
                <p>Last name</p>
                <input
                  type="text"
                  class="email-validate"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="email">
              <p for="">Email Address</p>
              <input
                type="email"
                class="email-validate"
                placeholder="Enter Valid Email ID"
              />
            </div>
            <div class="password">
              <p for="">Password</p>
              <input type="password" class="pswrd-validate" />
            </div>
            <div class="reset-details">
              <div>
                <input type="checkbox" class="checkbox" />I accept all the Terms
                and conditions
              </div>
            </div>
            <button class="login-btn">Create Account</button>
            <Link class="have-account-link" to="/login">
              Already have Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Signup };
