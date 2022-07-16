import "./videocard.css";
import { BsThreeDotsVertical } from "../../Utils/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VideoMenu } from "../VideoMenu/VideoMenu";
import { useHistory } from "../../Context/HistoryContext/HistoryContext";
const VideoCard = ({ videoData }) => {
  const [showOptions, setOptions] = useState(false);
  const { addVideoToHistory } = useHistory();
  const navigate = useNavigate();
  return (
    <div className="video-card">
      <div>
        <Link to={`/play/${videoData._id}`}>
          <img
            className="video-thumbnail"
            src={videoData.thumbnail}
            alt=""
            onClick={() => {
              addVideoToHistory(videoData);
              navigate(`/play/${videoData._id}`);
            }}
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
        {showOptions && (
          <VideoMenu showOptionsMenu={setOptions} videoData={videoData} />
        )}
      </div>
    </div>
  );
};
export { VideoCard };
