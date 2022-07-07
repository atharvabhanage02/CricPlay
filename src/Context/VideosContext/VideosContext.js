import { createContext, useContext, useEffect, useState } from "react";
import { getVideos } from "../../Services/getVideos";
import { useAuth } from "../Auth/auth-context";

const VideosContext = createContext();
const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const { auth } = useAuth();
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const filterVideosFunc = (tag) => {
    const filterResult = videos.filter((video) => video.category === tag);
    if (tag === "All") {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(filterResult);
    }
  };
  const searchVideos = filteredVideos.filter((item) =>
    item.title.toLowerCase().includes(searchVal)
  );
  useEffect(() => {
    (async () => {
      try {
        const response = await getVideos();
        setVideos(response.videos);
        setFilteredVideos(response.videos);
      } catch (error) {
        console.log("error occured in useEffect while seeting VideosList");
      }
    })();
  }, );
  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        filteredVideos,
        filterVideosFunc,
        searchVal,
        setSearchVal,
        searchVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
const useVideos = () => useContext(VideosContext);
export { VideoProvider, useVideos };
