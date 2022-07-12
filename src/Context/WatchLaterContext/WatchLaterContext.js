import { createContext, useContext, useEffect, useState } from "react";
import { getWatchLaterVideos } from "../../Utils/watchLaterService";
import { useAuth } from "../Auth/auth-context";
import axios from "axios";
const WatchLaterContext = createContext();
const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideos, setWatchlaterVideos] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    if (auth.isLogIn) {
      (async () => {
        try {
          const response = await getWatchLaterVideos(auth.tokenValue);
          setWatchlaterVideos(response.watchlater);
        } catch (error) {
          console.log("error in getting watch later videos", error);
        }
      })();
    } else {
      setWatchlaterVideos([]);
    }
  }, []);
  const addVideoToWatchLater = async (video) => {
    try {
      const { data } = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: auth.tokenValue } }
      );
      setWatchlaterVideos(data.watchlater);
    } catch (error) {
      console.log("error in adding video to watch later", error);
    }
  };
  const removeVideoFromWatchLater = async (id) => {
    try {
      const { data } = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: { authorization: auth.tokenValue },
      });
      setWatchlaterVideos(data.watchlater);
    } catch (error) {
      console.log("error in deleting video from watchlater", error);
    }
  };
  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterVideos,
        addVideoToWatchLater,
        removeVideoFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
