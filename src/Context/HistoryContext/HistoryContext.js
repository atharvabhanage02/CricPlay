import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../Auth/auth-context";
import axios from "axios";
import { getHistoryVideos } from "../../Services/historyService";
const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
  const [historyVideos, setHistoryVideos] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    if (auth.isLogIn) {
      (async () => {
        try {
          const response = await getHistoryVideos(auth.tokenValue);
          setHistoryVideos(response.history);
        } catch (error) {
          console.log("error in getting history videos", error);
        }
      })();
    } else {
      setHistoryVideos([]);
    }
  }, []);
  const addVideoToHistory = async (video) => {
    const isVideoPresent = historyVideos.find((item) => item._id === video._id);
    if (isVideoPresent) {
      setHistoryVideos((prev) => prev);
    } else {
      try {
        const { data } = await axios.post(
          "/api/user/history",
          { video },
          { headers: { authorization: auth.tokenValue } }
        );
        setHistoryVideos(data.history);
      } catch (error) {
        console.log("error in adding video to history", error);
      }
    }
  };
  const removeVideoFromHistory = async (id) => {
    try {
      const { data } = await axios.delete(`/api/user/history/${id}`, {
        headers: { authorization: auth.tokenValue },
      });
      setHistoryVideos(data.history);
    } catch (error) {
      console.log("error in removing video from history", error);
    }
  };
  const removeAllVideosFromHistory = async () => {
    try {
      const { data } = await axios.delete("/api/user/history/all", {
        headers: { authorization: auth.tokenValue },
      });
      setHistoryVideos(data.history);
    } catch (error) {
      console.log("error in deleting all videos from history", error);
    }
  };
  return (
    <HistoryContext.Provider
      value={{
        historyVideos,
        addVideoToHistory,
        removeVideoFromHistory,
        removeAllVideosFromHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
const useHistory = () => useContext(HistoryContext);
export { HistoryProvider, useHistory };
