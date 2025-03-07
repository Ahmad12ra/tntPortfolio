import { useEffect, useContext, useState } from "react";
import TopNav from "../../topNav/js/topNav";
import "../css/longs.css";
import { UseContextValues } from "../../../App";

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
  
  },[videoInfo.fetchingResult])

  return (
    <div className="container">
      <div className="videos-page-main-container">
        <TopNav pageNumber={1} />
        <div className="middle-part-videos-page-main-container">
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder"></div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-video-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i class="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">250k</div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i class="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">250k</div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i class="fa-brands fa-youtube"></i>
                250k subscribers
              </div>
            </div>
          </div>
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder"></div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-video-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i class="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">250k</div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i class="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">250k</div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i class="fa-brands fa-youtube"></i>
                250k subscribers
              </div>
            </div>
          </div>
          <div className="video-holder-main-container">
            <div className="vieo-part-inner-video-holder"></div>
            <div className="vieo-status-part-inner-video-holder">
              <div className="right-part-container-video-status-inner">
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i class="fa-solid fa-eye"></i>
                  </div>
                  <div className="right-part-inner-count">250k</div>
                </div>
                <div className="right-part-inner-inner-container">
                  <div className="right-part-inner-icon">
                    <i class="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="right-part-inner-count">250k</div>
                </div>
              </div>
              <div className="bottom-part-subscribers-main-container">
                <i class="fa-brands fa-youtube"></i>
                250k subscribers
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
