import axios from "axios";

const addVideoToPlaylist = async (playlistId, video, tokenVal) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: tokenVal } }
    );
    return data;
  } catch (error) {
    console.log("Error in adding video to playlist", error);
  }
};

const createPlaylist = async (playlistInfo, tokenVal) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      { playlist: playlistInfo },
      {
        headers: { authorization: tokenVal },
      }
    );
    return data;
  } catch (error) {
    console.log("error in creating Playlist", error);
  }
};

const deletePlaylist = async (id, tokenVal) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${id}`, {
      headers: { authorization: tokenVal },
    });
    return data;
  } catch (error) {
    console.log("error in deleting whole playlist");
  }
};

const getPlaylists = async (tokenVal) => {
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: { authorization: tokenVal },
    });
    return data;
  } catch (error) {
    console.log("error in getting all the Playlists", error);
  }
};

const getSinglePlaylist = async (id, tokenVal) => {
  try {
    const { data } = await axios.get(`/api/user/playlists/${id}`, {
      headers: { authorization: tokenVal },
    });
    return data;
  } catch (error) {
    console.log("error in getting a specific playlist", error);
  }
};

const deleteVideoFromPlaylist = async (playlistId, videoId, tokenVal) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: tokenVal } }
    );
    return data;
  } catch (error) {
    console.log("error in deleting a single video from playlist", error);
  }
};

export {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylists,
  getSinglePlaylist,
  deleteVideoFromPlaylist,
};
// 1.Get All Playlists (GET)
// 2.Create a playlist (POST)
// 3.Delete complete playlist (DELETE)
// 4. Get single Playlist (GET)
// 5.Add video to specific Playlist (POST)
// 6.Delete Video from Playlist (DELETE)
//
