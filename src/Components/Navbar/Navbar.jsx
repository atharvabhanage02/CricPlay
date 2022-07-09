import { FiLogOut } from "../../Utils/icons";
import "./navbar.css";
import { useAuth } from "../../Context/Auth/auth-context";
import { Link } from "react-router-dom";
import { useVideos } from "../../Context/VideosContext/VideosContext";
export const Navbar = () => {
  const {
    auth: { isLogIn },
    logOutUser,
  } = useAuth();
  const { setSearchVal, searchVal } = useVideos();
  return (
    <nav class="navbar">
      <div class="navbar-wrapper vl-navbar">
        <div class="ecom-title">
          <div class="ecom-name">🏏CricPlay</div>
        </div>

        <div class="search-container">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="search-bar"
            aria-hidden="true"
            placeholder="Search"
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>

        <div class="user-activity-details">
          {isLogIn ? (
            <span data-tooltip="Logout">
              <FiLogOut className="filter-icon" onClick={() => logOutUser()} />
            </span>
          ) : (
            <Link className="login-btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
