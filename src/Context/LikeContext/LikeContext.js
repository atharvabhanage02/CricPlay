import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { getLikedVideos } from "../../Services/likeService";
import { useAuth } from "../Auth/auth-context";
const LikeContext = createContext();
const LikeProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    if (auth.isLogIn) {
      (async () => {
        try {
          const response = await getLikedVideos(auth.tokenValue);
          setLikedVideos(response.data.likes);
        } catch (error) {
          console.log("error occured while getting liked videos", error);
        }
      })();
    } else {
      console.log("in else block not logged in");
      setLikedVideos([]);
    }
  }, [auth]);
  const addVideoToLike = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: auth.tokenValue } }
      );
      setLikedVideos(response.data.likes);
    } catch (error) {
      console.log("Error in adding video to like", error);
    }
  };
  const removeVideoFromLikes = async (id) => {
    try {
      const { data } = await axios.delete(`/api/user/likes/${id}`, {
        headers: { authorization: auth.tokenValue },
      });
      setLikedVideos(data.likes);
    } catch (error) {
      console.log("error in removing liked video", error);
    }
  };
  return (
    <LikeContext.Provider
      value={{ likedVideos, addVideoToLike, removeVideoFromLikes }}
    >
      {children}
    </LikeContext.Provider>
  );
};
const useLikes = () => useContext(LikeContext);
export { LikeProvider, useLikes };
