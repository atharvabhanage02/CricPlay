import "./playlist-modal.css";
import { AiOutlineClose } from "../../Utils/icons";
import { useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext/PlaylistContext";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  deleteVideoFromPlaylist,
  getPlaylists,
} from "../../Services/playlistService";
import { useAuth } from "../../Context/Auth/auth-context";
import { useVideos } from "../../Context/VideosContext/VideosContext";
const PlayistOption = ({ videoData }) => {
  const [playlistInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });
  const { auth } = useAuth();
  const { setPlaylistOption } = useVideos();
  const {
    dispatchPlaylist,
    playlistState: { playlists },
  } = usePlaylist();

  const createPlaylistFunc = async () => {
    try {
      const data = await createPlaylist(playlistInfo, auth.tokenValue);
      dispatchPlaylist({
        type: "CREATE_NEW_PLAYLIST",
        payload: data.playlists,
      });
    } catch (error) {
      console.log("error in creating playlist in main component", error);
    }
  };

  const addVideoToPlaylistFunc = async (id, video) => {
    try {
      const data = await addVideoToPlaylist(id, video, auth.tokenValue);
      dispatchPlaylist({ type: "ADD_TO_PLAYLIST", payload: data.playlist });
    } catch (error) {
      console.log(
        "error in main component function in adding single video to playlist",
        error
      );
    }
  };
  const deleteVideoFromPlaylistFunc = async (id, videoId) => {
    try {
      const data = await deleteVideoFromPlaylist(id, videoId, auth.tokenValue);
      dispatchPlaylist({
        type: "REMOVE_FROM_PLAYLIST",
        payload: data.playlist,
      });
    } catch (error) {
      console.log("error in main component function", error);
    }
  };
  return (
    <div className="playlist-container">
      <div className="playlist-section">
        <div className="playlist-header">
          <p>Add to Playlist</p>
          <AiOutlineClose
            className="close-modal"
            onClick={() => setPlaylistOption(false)}
          />
        </div>

        <div className="select-playlist">
          {playlists.map((playlist) => {
            return (
              <div className="single-playlist-option">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={playlist.videos.some((video) => {
                    return video._id === videoData._id;
                  })}
                  onChange={(e) => {
                    e.target.checked
                      ? addVideoToPlaylistFunc(playlist._id, videoData)
                      : deleteVideoFromPlaylistFunc(
                          playlist._id,
                          videoData._id
                        );
                  }}
                />
                <p>{playlist.title}</p>
              </div>
            );
          })}
        </div>
        <div className="playlist-user-input">
          <input
            type="text"
            placeholder="Enter Playlist name..."
            value={playlistInfo.title}
            onChange={(e) =>
              setPlaylistInfo({ ...playlistInfo, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={playlistInfo.description}
            onChange={(e) =>
              setPlaylistInfo({
                ...playlistInfo,
                description: e.target.value,
              })
            }
          />
          <div className="cursor-not-allowed">
            <button
              className={`login-btn white-border ${
                playlistInfo.title === "" || playlistInfo.description === ""
                  ? "disable-btn"
                  : ""
              }`}
              onClick={() => {
                createPlaylistFunc();
                setPlaylistInfo({ title: "", description: "" });
                // setTooglePlaylistOption((prev) => !prev);
              }}
            >
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { PlayistOption };
