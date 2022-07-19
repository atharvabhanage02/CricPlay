import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  playlistReducer,
  initialPlaylistState,
} from "../../Reducers/playlist-reducer";
import { getPlaylists } from "../../Services/playlistService";
import { useAuth } from "../Auth/auth-context";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistState, dispatchPlaylist] = useReducer(
    playlistReducer,
    initialPlaylistState
  );
  const { auth } = useAuth();
  const getAllPlaylists = async () => {
    try {
      const response = await getPlaylists(auth.tokenValue);
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log("error in getting all the Playlists");
    }
  };
  return (
    <PlaylistContext.Provider
      value={{ playlistState, dispatchPlaylist, playlists, getAllPlaylists }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);
export { PlaylistProvider, usePlaylist };
