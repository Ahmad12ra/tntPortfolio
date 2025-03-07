import { useEffect, useContext, useState } from "react";
import TopNav from "../../topNav/js/topNav";
import "../css/longs.css";
import { UseContextValues } from "../../../App";
import YouTubePlayer from "../../youtubeApi";

export default function LongsComp() {
  const videoInfo = useContext(UseContextValues);
  const [uryFirstVideo, setUryFirstVideo] = useState({});
  const [urySecondVideo, setUrySecondVideo] = useState({});
  const [urySubs, setUrySubs] = useState({});
  const [beterVideo, setBeterVideo] = useState({});
  const [beterSubs, setBeterSubs] = useState({});

  useEffect(() => {
    console.log(videoInfo);
    setUryFirstVideo(videoInfo.uryFirstVideo);
    setUrySecondVideo(videoInfo.urySecondVideo);
    setUrySubs(videoInfo.urySubs);

    setBeterVideo(videoInfo.beterVideo);
    setBeterSubs(videoInfo.beterSubs);
  }, [videoInfo.fetchingResult]);

  return (
    <div className="container">
      <div className="videos-page-main-container">
        <TopNav pageNumber={1} />
        <div className="page-title">TOP VIDEOS</div>
        <div className="middle-part-videos-page-main-container">
          {/* Video 1 */}
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder">
              <div className="image-thumnail">
                <YouTubePlayer videoId="5vBALv08_Rg" playerId="youtube-player-1" />
              </div>
            </div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-video-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {urySecondVideo.views}
                  </div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {urySecondVideo.likes}
                  </div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i className="fa-brands fa-youtube"></i>
                {urySubs.subscribers} subscribers
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder">
              <div className="image-thumnail">
                <YouTubePlayer videoId="NIZzyjJch14" playerId="youtube-player-2" />
              </div>
            </div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-video-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {uryFirstVideo.views}
                  </div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {uryFirstVideo.likes}
                  </div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i className="fa-brands fa-youtube"></i>
                {urySubs.subscribers} subscribers
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder">
              <div className="image-thumnail">
                <YouTubePlayer videoId="END0JE8ankw" playerId="youtube-player-3" />
              </div>
            </div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-video-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {beterVideo.views}
                  </div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {beterVideo.likes}
                  </div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i className="fa-brands fa-youtube"></i>
                {beterSubs.subscribers} subscribers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}