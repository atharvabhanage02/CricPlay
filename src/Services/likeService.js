import axios from "axios";
const getLikedVideos = async (tokenVal) => {
  const { data } = await axios.get("/api/user/likes", {
    headers: { authorization: tokenVal },
  });
  return data;
};
export { getLikedVideos };
