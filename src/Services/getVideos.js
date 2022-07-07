import axios from "axios";
const getVideos = async () => {
  const { data } = await axios.get("/api/videos");
  return data;
};
export { getVideos };
