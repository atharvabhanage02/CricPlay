import "./singlevideocard.css";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  BiLike,
  CgPlayListCheck,
  AiFillLike,
} from "../../Utils/icons";
import { useVideos } from "../../Context/VideosContext/VideosContext";
import { useAuth } from "../../Context/Auth/auth-context";
import { useNavigate } from "react-router-dom";
const SingleVideoCard = ({ singleVideo }) => {
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
    </div>
  );
};
export { SingleVideoCard };
