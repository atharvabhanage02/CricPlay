import axios from "axios";
const getHistoryVideos = async (tokenVal) => {
  const { data } = await axios.get("/api/user/history", {
    headers: { authorization: tokenVal },
  });
  return data;
};
export { getHistoryVideos };
