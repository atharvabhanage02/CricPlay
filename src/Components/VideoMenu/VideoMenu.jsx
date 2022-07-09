import "./videomenu.css";
import {
  MdOutlineWatchLater,
  CgPlayList,
  CgPlayListCheck,
  BiLike,
  AiFillLike,
  RiHistoryLine,
} from "../../Utils/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth/auth-context";
import { useVideos } from "../../Context/VideosContext/VideosContext";
const VideoMenu = ({ showOptionsMenu, videoData }) => {
  const { pathname } = useLocation();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { showPlaylistOption, setPlaylistOption } = useVideos();
  return (
    <div className="vl-options-menu">
      <div className="menu-icons">
        <BiLike className="home-page-icons " />
        <div>Like</div>
      </div>
      <div className="menu-icons">
        <MdOutlineWatchLater className="home-page-icons " />
        <div>Watch Later</div>
      </div>
      <div className="menu-icons">
        <CgPlayList className="home-page-icons " />
        <div>Playlist</div>
      </div>
    </div>
  );
};
export { VideoMenu };
