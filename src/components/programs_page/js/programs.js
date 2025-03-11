import TopNav from "../../topNav/js/topNav";
import "../css/programs.css";
import Adbope from "../../../images/adbope.svg.png";
import AfterEffect from "../../../images/afterEffect.svg.png";
import PhotoShop from "../../../images/photoshop.svg.png"

export default function ProgramsComp() {
  return (
    <div className="container">
      <div className="programs-page-main-container">
        <TopNav pageNumber={3} />
        <div className="programs-main-container">
          <div className="program-inner-main-container">
            <div className="programs-details-container">
              <div className="program-image-container">
                <img src={Adbope} alt=" " />
              </div>
              <div className="programs-description-container">
                <div className="programe-subtitle">Name</div>
                <div className="program-description">Adbope</div>
              </div>
              <div className="programs-description-container">
                <div className="programe-subtitle">Use</div>
                <div className="program-description">photoshop</div>
              </div>
            </div>
          </div>
          <div className="program-inner-main-container">
            <div className="programs-details-container">
              <div className="program-image-container">
                <img src={AfterEffect} alt=" " />
              </div>
              <div className="programs-description-container">
                <div className="programe-subtitle">Name</div>
                <div className="program-description">Adbope</div>
              </div>
              <div className="programs-description-container">
                <div className="programe-subtitle">Use</div>
                <div className="program-description">photoshop</div>
              </div>
            </div>
          </div>
          <div className="program-inner-main-container">
            <div className="programs-details-container">
              <div className="program-image-container">
                <img src={PhotoShop} alt=" " />
              </div>
              <div className="programs-description-container">
                <div className="programe-subtitle">Name</div>
                <div className="program-description">Adbope</div>
              </div>
              <div className="programs-description-container">
                <div className="programe-subtitle">Use</div>
                <div className="program-description">photoshop</div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div></div>
      </div>
    </div>
  );
}
