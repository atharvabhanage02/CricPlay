import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { usePlaylist } from "../../Context/PlaylistContext/PlaylistContext";
import { useHistory } from "../../Context/HistoryContext/HistoryContext";
import { useState } from "react";
import { BsThreeDotsVertical, CgPlayListCheck } from "../../Utils/icons";
import { deleteVideoFromPlaylist } from "../../Services/playlistService";
import { useAuth } from "../../Context/Auth/auth-context";

const PlaylistSinglePage = () => {
  const params = useParams();
  const {
    playlistState: { playlists },
    dispatchPlaylist,
  } = usePlaylist();
  const currentPlaylist = playlists.find(
    (video) => video._id === params.playlistId
  );
  const { addVideoToHistory } = useHistory();
  const [toggleOption, setToggle] = useState(false);
  const { auth } = useAuth();
  const deleteVideoFromPlaylistFunc = async (id, videoId) => {
    try {
      const data = await deleteVideoFromPlaylist(id, videoId, auth.tokenValue);
      dispatchPlaylist({
        type: "REMOVE_FROM_PLAYLIST",
        payload: data.playlist,
      });
    } catch (error) {
      console.log("error in deleting video from playlist", error);
    }
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="vl-main-container flex-center-row">
        {currentPlaylist.videos.length == 0 ? (
          <h1>No videos in Playlist</h1>
        ) : (
          currentPlaylist.videos.map((video) => {
            return (
              <div className="video-card" id="" key={video._id}>
                <div>
                  <Link to={`/play/${video._id}`}>
                    <img
                      className="video-thumbnail"
                      src={video.thumbnail}
                      alt=""
                      onClick={() => addVideoToHistory(video)}
                    />
                  </Link>
                </div>
                {toggleOption && (
                  <div className="vl-options-menu">
                    <div
                      className="menu-icons"
                      onClick={() =>
                        deleteVideoFromPlaylistFunc(
                          params.playlistId,
                          video._id
                        )
                      }
                    >
                      <CgPlayListCheck className="home-page-icons" />
                      <div>Remove from Playlist</div>
                    </div>
                  </div>
                )}
                <div className="video-options">
                  <img
                    className="channel-icon"
                    src={video.channelIcon}
                    alt=""
                  />
                  <div className="video-details">
                    <p className="video-title">{video.title}</p>
                    <small>{video.channel}</small>
                  </div>
                  <div>
                    <BsThreeDotsVertical
                      className="vl-icon"
                      onClick={() => setToggle((prev) => !prev)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export { PlaylistSinglePage };
