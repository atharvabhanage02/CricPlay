import "./singlevideocard.css";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  BiLike,
  CgPlayListCheck,
  AiFillLike,
} from "../../Utils/icons";
import { useLikes } from "../../Context/LikeContext/LikeContext";
import { useWatchLater } from "../../Context/WatchLaterContext/WatchLaterContext";
import { useVideos } from "../../Context/VideosContext/VideosContext";
import { useAuth } from "../../Context/Auth/auth-context";
import { useNavigate } from "react-router-dom";
const SingleVideoCard = ({ singleVideo }) => {
  const { likedVideos, addVideoToLike, removeVideoFromLikes } = useLikes();
  const { watchLaterVideos, addVideoToWatchLater, removeVideoFromWatchLater } =
    useWatchLater();
  const { showPlaylistOption, setPlaylistOption } = useVideos();
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="single-video-card">
      <div>
        <iframe
          width="500px"
          height="300px"
          frameborder="0"
          src={singleVideo.link}
          alt=""
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
      <div className="video-details">
        <p className="video-title">{singleVideo.title}</p>
        <small>{singleVideo.description}</small>
      </div>
      <div className="vl-options">
        {likedVideos.find((item) => item._id === singleVideo._id) ? (
          <div
            className="vl-tag single-video-tag"
            onClick={() => removeVideoFromLikes(singleVideo._id)}
          >
            <AiFillLike />
            <p>Remove from Likes</p>
          </div>
        ) : (
          <div
            className="vl-tag single-video-tag"
            onClick={() =>
              auth.isLogIn ? addVideoToLike(singleVideo) : navigate("/login")
            }
          >
            <BiLike />
            <p>Like</p>
          </div>
        )}
        <div className="vl-tag single-video-tag">
          <MdPlaylistAdd />
          <p>Save</p>
        </div>
        {watchLaterVideos.find((item) => item._id === singleVideo._id) ? (
          <div
            className="vl-tag single-video-tag"
            onClick={() => removeVideoFromWatchLater(singleVideo._id)}
          >
            <CgPlayListCheck />
            <p>Remove from Watch Later</p>
          </div>
        ) : (
          <div
            className="vl-tag single-video-tag"
            onClick={() =>
              auth.isLogIn
                ? addVideoToWatchLater(singleVideo)
                : navigate("/login")
            }
          >
            <MdOutlineWatchLater />
            <p>Watch Later</p>
          </div>
        )}
      </div>
    </div>
  );
};
export { SingleVideoCard };
