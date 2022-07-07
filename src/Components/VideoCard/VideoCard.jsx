import "./videocard.css";
import { BsThreeDotsVertical } from "../../Utils/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useVideos } from "../../Context/VideosContext/VideosContext";
const VideoCard = ({ videoData }) => {
  const [showOptions, setOptions] = useState(false);
  const { setPlaylistOption } = useVideos();
//   const { addVideoToHistory } = useHistory();

  return (
    <div className="video-card">
      <div>
        <Link to={`/play/${videoData._id}`}>
          <img
            className="video-thumbnail"
            src={videoData.thumbnail}
            alt=""
            // onClick={() => addVideoToHistory(videoData)}
          />
        </Link>
      </div>
      <div className="video-options">
        <img className="channel-icon" src={videoData.channelIcon} alt="" />
        <div className="video-details">
          <p className="video-title">{videoData.title}</p>
          <small>{videoData.channel}</small>
        </div>
        <div>
          <BsThreeDotsVertical
            className="vl-icon"
            onClick={() => setOptions((prev) => !prev)}
          />
        </div>
        {/* {showOptions && (
          <VideoMenu
            showOptionsMenu={setOptions}
            videoData={videoData}
            setPlaylistOption={setPlaylistOption}
          />
        )} */}
      </div>
    </div>
  );
};
export { VideoCard };
