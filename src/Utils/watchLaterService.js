import axios from "axios";
const getWatchLaterVideos = async (tokenVal) => {
  const { data } = await axios.get("/api/user/watchlater", {
    headers: { authorization: tokenVal },
  });
  return data;
};
export { getWatchLaterVideos };
