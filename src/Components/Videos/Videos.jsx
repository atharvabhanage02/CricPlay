import { useVideos } from "../../Context/VideosContext/VideosContext";
import { VideoCard } from "../VideoCard/VideoCard";
import "./videos.css";
const Videos = () => {
  const { searchVideos } = useVideos();
  return (
    <div className="videos-wrapper">
      {searchVideos.map((video) => {
        return <VideoCard videoData={video} />;
      })}
    </div>
  );
};
export { Videos };
