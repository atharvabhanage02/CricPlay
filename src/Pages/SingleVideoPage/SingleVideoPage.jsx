import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { SingleVideoCard } from "../../Components/SingleVideoCard/SingleVideoCard";
import { useVideos } from "../../Context/VideosContext/VideosContext";
import axios from "axios";
import "./singlevideopage.css";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
const SingleVideoPage = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const { videos } = useVideos();
  const { showPlaylistOption, setPlaylistOption } = useVideos();
  // const [playlistModal, setPlaylistModal] = useState(false);
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${params.videoId}`);
        setSingleVideo(data.video);
      } catch (error) {
        console.log("error occured while setting single video list", error);
      }
    })();
  });
  const currentVideo = videos.find((video) => video?._id === params.videoId);
  const suggestedVideos = videos.filter(
    (video) =>
      video.category === currentVideo?.category &&
      video?._id !== currentVideo._id
  );
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="single-video-page-videos">
        <SingleVideoCard singleVideo={singleVideo} />
        <div className="video-category">
          <h1>Must Watch Videos</h1>
          {suggestedVideos.map((video) => {
            return (
              <div>
                <VideoCard videoData={video} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { SingleVideoPage };
