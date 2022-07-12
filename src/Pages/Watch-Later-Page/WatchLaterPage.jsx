import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useWatchLater } from "../../Context/WatchLaterContext/WatchLaterContext";

const WatchLaterPage = () => {
  const { watchLaterVideos } = useWatchLater();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="videos-wrapper vl-main-container">
        {watchLaterVideos &&
          watchLaterVideos.map((item) => {
            return <VideoCard videoData={item} />;
          })}
      </div>
    </div>
  );
};
export { WatchLaterPage };
