import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useHistory } from "../../Context/HistoryContext/HistoryContext";
const History = () => {
  const { historyVideos, removeAllVideosFromHistory } = useHistory();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="videos-wrapper vl-main-container">
        {historyVideos &&
          historyVideos.map((item) => {
            return <VideoCard videoData={item} />;
          })}
      </div>
      {historyVideos.length !== 0 && (
        <button
          className="login-btn clear-history"
          onClick={() => removeAllVideosFromHistory()}
        >
          Clear History
        </button>
      )}
    </div>
  );
};
export { History };
