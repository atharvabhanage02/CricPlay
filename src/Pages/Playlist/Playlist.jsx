import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useAuth } from "../../Context/Auth/auth-context";
import { usePlaylist } from "../../Context/PlaylistContext/PlaylistContext";
import { BsThreeDotsVertical, CgPlayListCheck } from "../../Utils/icons";
import { deletePlaylist } from "../../Services/playlistService";

const Playlist = () => {
  const {
    playlistState: { playlists },
    dispatchPlaylist,
  } = usePlaylist();
  const navigate = useNavigate();
  const [toggleOption, setToggle] = useState(false);
  const { auth } = useAuth();
  const deletePlaylistFunc = async (id) => {
    try {
      const data = await deletePlaylist(id, auth.tokenValue);
      dispatchPlaylist({ type: "DELETE_PLAYLIST", payload: data.playlists });
    } catch (error) {
      console.log("error in deleting the whole playlist function", error);
    }
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="vl-main-container flex-center-row gap-10">
        {playlists.length == 0 ? (
          <h1>No playlist available,Please create Playlist</h1>
        ) : (
          playlists.map((video) => {
            return (
              <div className="video-card border-1p">
                <div>
                  <Link to={`/playlist/${video._id}`}>
                    <img
                      className="video-thumbnail"
                      src="assets/Thumbnail/video-1.webp"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="video-options">
                  <div className="video-details">
                    <p className="video-title">{video.title}</p>
                  </div>
                  <div>
                    <BsThreeDotsVertical
                      className="vl-icon"
                      onClick={() => setToggle((prev) => !prev)}
                    />
                  </div>
                  {toggleOption && (
                    <div className="vl-options-menu">
                      <div
                        className="menu-icons"
                        onClick={() => deletePlaylistFunc(video._id)}
                      >
                        <CgPlayListCheck className="home-page-icons" />
                        <div>Delete Playlist</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export { Playlist };

