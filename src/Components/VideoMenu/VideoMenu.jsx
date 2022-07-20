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
import { useLikes } from "../../Context/LikeContext/LikeContext";
import { useWatchLater } from "../../Context/WatchLaterContext/WatchLaterContext";
import { useHistory } from "../../Context/HistoryContext/HistoryContext";
import { PlayistOption } from "../Playlist-Option/PlaylistOption";
const VideoMenu = ({ showOptionsMenu, videoData }) => {
  const { pathname } = useLocation();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { showPlaylistOption, setPlaylistOption } = useVideos();
  const { addVideoToLike, removeVideoFromLikes, likedVideos } = useLikes();
  const { watchLaterVideos, addVideoToWatchLater, removeVideoFromWatchLater } =
    useWatchLater();
  const { removeVideoFromHistory } = useHistory();
  return (
    <div className="vl-options-menu">
      {pathname === "/history" ? (
        <div className="menu-icons">
          <RiHistoryLine className="home-page-icons " />
          <div
            onClick={() =>
              auth.isLogIn
                ? removeVideoFromHistory(videoData._id)
                : navigate("/login")
            }
          >
            Remove from History
          </div>
        </div>
      ) : (
        <div>
          {watchLaterVideos.find((item) => item._id === videoData._id) ? (
            <div
              className="menu-icons"
              onClick={() =>
                auth.isLogIn
                  ? removeVideoFromWatchLater(videoData._id)
                  : navigate("/login")
              }
            >
              <CgPlayListCheck className="home-page-icons" />
              <div>Remove from Watch Later</div>
            </div>
          ) : (
            <div
              className="menu-icons"
              onClick={() =>
                auth.isLogIn
                  ? addVideoToWatchLater(videoData)
                  : navigate("/login")
              }
            >
              <MdOutlineWatchLater className="home-page-icons" />
              <div>Watch Later</div>
            </div>
          )}
          <div
            className="menu-icons"
            onClick={() => {
              auth.isLogIn
                ? setPlaylistOption((prev) => !prev) &&
                  showOptionsMenu((prev) => !prev)
                : navigate("/login");
            }}
          >
            <CgPlayList className="home-page-icons" />
            <div>Playlists</div>
          </div>
          {likedVideos.find((item) => item._id === videoData._id) ? (
            <div
              className="menu-icons"
              onClick={() => removeVideoFromLikes(videoData._id)}
            >
              <AiFillLike className="home-page-icons " />
              <div>Remove from Likes</div>
            </div>
          ) : (
            <div
              className="menu-icons"
              onClick={() =>
                auth.isLogIn ? addVideoToLike(videoData) : navigate("/login")
              }
            >
              <BiLike className="home-page-icons " />
              <div>Like</div>
            </div>
          )}
          {pathname === "/playlist/:playlistId" && (
            <div className="menu-icons">
              <RiHistoryLine className="home-page-icons " />
              <div>Remove from Playlist</div>
            </div>
          )}
          {/* Playlist Modal will come here */}
          {showPlaylistOption && (
            <PlayistOption
              videoData={videoData}
              setPlaylistOption={setPlaylistOption}
            />
          )}
        </div>
      )}
    </div>
  );
};
export { VideoMenu };
