import { useEffect, useContext, useState } from "react";
import TopNav from "../../topNav/js/topNav";
import "../css/longs.css";
import { UseContextValues } from "../../../App";

export default function LongsComp() {
  const videoInfo = useContext(UseContextValues);
  const [uryFirstVideo, setUryFirstVideo] = useState({});
  const [urySecondVideo, setUrySecondVideo] = useState({});
  const [gamingCenterSubs, setGamingCenterSubs] = useState({});
  const [beterVideo, setBeterVideo] = useState({});
  const [beterSubs, setBeterSubs] = useState({});

  useEffect(() => {
    console.log(videoInfo);
    setUryFirstVideo(videoInfo.uryFirstVideo);
    setUrySecondVideo(videoInfo.urySecondVideo);
    setGamingCenterSubs(videoInfo.gamingCenterSubs);

    setBeterVideo(videoInfo.beterVideo);
    setBeterSubs(videoInfo.beterSubs);
  }, [videoInfo.fetchingResult]);

  return (
    <div className="container">
      <div className="videos-page-main-container">
        <TopNav pageNumber={1} />
        <div className="page-title-main-container">
          <div className="page-title">TOP VIDEOS</div>
          <div className="live-video-status-updates-container"><span></span> Live Video Status Update</div>
        </div>
        <div className="middle-part-videos-page-main-container">
          {/* Video 1 */}
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder">
              <div className="image-thumnail">
                <iframe
                  width="100%"
                  height="135"
                  src="https://www.youtube.com/embed/gCm7hSNKn2c?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                <div className="subscribers-count">{gamingCenterSubs.subscribers}</div> subscribers
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder">
              <div className="image-thumnail">
                <iframe
                  width="100%"
                  height="135"
                  src="https://www.youtube.com/embed/I1O0ZBl2cNM?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                <div className="subscribers-count">{gamingCenterSubs.subscribers}</div>
                 subscribers
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder">
              <div className="image-thumnail">
                <iframe
                  width="100%"
                  height="135"
                  src="https://www.youtube.com/embed/ltFq2stdskk?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                <div className="subscribers-count">{beterSubs.subscribers}</div>
                 subscribers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}