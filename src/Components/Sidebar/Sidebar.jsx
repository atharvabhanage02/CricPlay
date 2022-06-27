import "./sidebar.css";
import {
  MdExplore,
  MdOutlineWatchLater,
  CgPlayList,
  RiHistoryLine,
  BiLike,
} from "../../Utils/icons";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <aside className="sidebar">
        <div className="pages">
          <Link
            className={`category-names ${
              pathname === "/" ? "active-tab" : "white"
            } `}
            to="/"
          >
            <MdExplore className="home-page-icons" /> Explore
          </Link>
          <Link
            className={`category-names ${
              pathname === "/playlist" ? "active-tab" : "white"
            } `}
            to="/playlist"
          >
            <CgPlayList className="home-page-icons" /> Playlists
          </Link>
          <Link
            className={`category-names ${
              pathname === "/watch-later" ? "active-tab" : "white"
            } `}
            to="/watch-later"
          >
            <MdOutlineWatchLater className="home-page-icons" /> Watch Later
          </Link>
          <Link
            className={`category-names ${
              pathname === "/liked" ? "active-tab" : "white"
            } `}
            to="/liked"
          >
            <BiLike className="home-page-icons" /> Liked
          </Link>
          <Link
            className={`category-names ${
              pathname === "/history" ? "active-tab" : "white"
            } `}
            to="/history"
          >
            <RiHistoryLine className="home-page-icons" /> History
          </Link>
        </div>
      </aside>
    </div>
  );
};
