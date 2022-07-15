import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useLikes } from "../../Context/LikeContext/LikeContext";
import "./likedvideos.css";
const LikePage = () => {
  const { likedVideos } = useLikes();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="videos-wrapper vl-main-container">
        {likedVideos &&
          likedVideos.map((item) => {
            return <VideoCard videoData={item} />;
          })}
      </div>
    </div>
  );
};
export { LikePage };
