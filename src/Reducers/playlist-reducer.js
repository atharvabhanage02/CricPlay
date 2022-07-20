const initialPlaylistState = {
  playlists: [],
};

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NEW_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((vid) =>
          vid._id === action.payload._id
            ? { ...vid, videos: action.payload.videos }
            : vid
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((vid) =>
          vid._id === action.payload._id
            ? { ...vid, videos: action.payload.videos }
            : vid
        ),
      };
    default:
      return state;
  }
};
export { playlistReducer, initialPlaylistState };
