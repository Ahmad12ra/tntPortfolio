import TopNav from "../../topNav/js/topNav";
import "../css/shorts.css";
import { useEffect, useContext, useState } from "react";
import { UseContextValues } from "../../../App";

export default function ShortsComp() {
  const videoInfo = useContext(UseContextValues);
  const [centerFirst, setCenterFirst] = useState({});
  const [centerSecond, setCenterSecond] = useState({});
  const [centerThird, setCenterThird] = useState({});
  const [centerSubs, setCenterSubs] = useState({});

  useEffect(() => {
    console.log(videoInfo);
    setCenterFirst(videoInfo.gamingCenterFirstShort);
    setCenterSecond(videoInfo.gamingCenterSecondShort);
    setCenterThird(videoInfo.gamingCenterThirdShort);
    setCenterSubs(videoInfo.gamingCenterSubs);
    videoInfo.pageTransition();
  }, [videoInfo.fetchingResult]);

  return (
    <div className="container">
      <div className="videos-page-main-container">
        <TopNav pageNumber={2} />
        <div className="page-title">TOP SHORTS</div>
        <div className="middle-part-videos-page-main-container">
          {/* Video 1 */}
          <div className="short-holder-main-container">
            <div className="short-part-inner-video-holder">
              <div className="image-thumnail">
                <iframe
                  width="100%"
                  height="235"
                  src="https://www.youtube.com/embed/7cc3UlVGMFI?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-short-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {centerThird.views}
                  </div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {centerThird.likes}
                  </div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i className="fa-brands fa-youtube"></i>
                {centerSubs.subscribers} subscribers
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="short-holder-main-container">
            <div className="short-part-inner-video-holder">
              <div className="image-thumnail">
                <iframe
                  width="100%"
                  height="235"
                  src="https://www.youtube.com/embed/O6iftECQvJk?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-short-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {centerFirst.views}
                  </div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {centerFirst.likes}
                  </div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i className="fa-brands fa-youtube"></i>
                {centerSubs.subscribers} subscribers
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="short-holder-main-container">
            <div className="short-part-inner-video-holder">
              <div className="image-thumnail">
                <iframe
                  width="100%"
                  height="235"
                  src="https://www.youtube.com/embed/9Dot_x3EijQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-short-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {centerSecond.views}
                  </div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">
                    {centerSecond.likes}
                  </div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i className="fa-brands fa-youtube"></i>
                {centerSubs.subscribers} subscribers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}