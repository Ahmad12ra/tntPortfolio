import TopNav from "../../topNav/js/topNav.js";
import "../css/home.css";
import editorImage from "../../../images/editorImage.png";
import { useRef } from "react";
export default function HomePage() {

  const emailCopied = useRef(null);

  function emailConfigrationFunc(email) {
    window.location.href = `mailto: ${email}`;
    navigator.clipboard.writeText(`${email}`);
    emailCopied.current.style.cssText = "opacity: 1; top: 30px";
    setTimeout(() => emailCopied.current.style.cssText = "opacity: 0; top: 20px",2000);

  }

  return (
    <div className="container">
      <div className="home-page-main-container">
        <div ref={emailCopied} className="email-copied">Email Copied</div>
        <TopNav pageNumber={0} />
        <div className="middle-part-home-page-main-container">
          <div className="home-page-editor-information">
            <div className="job-type-home-page">Video Editor</div>
            <div className="about-person-middle-part-home-page">
              Hello I'm <br /> <span> Ahmed Magid</span>
            </div>
            <div className="bottom-part-information-about-person-job">
              I excel at video editing <br /> as I have many experinces in that
              field
            </div>
            <div className="bottom-part-home-page-contact-types">
              <div className="contact-type-bottom-part-inner"
                onClick={() => emailConfigrationFunc("tnt222ytb@gmail.com")}
              >
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
          <div className="home-page-editor-picture-main-container">
            <div className="editor-image-main-container">
              
            <img className="editor-image" src={editorImage} alt="creator"/>
            </div>
          </div>
        </div>
        <div className="home-page-bottom-part-information-main-container">
          <div className="bottom-part-information-inner-info">
            <div className="number-inner-inner-info-bottom-part-home-page">4</div>
            <div className="text-infor-inner-inner-info-bottom-part-home-page">years of <br/> experince</div>
          </div>
          <div className="bottom-part-information-inner-info">
            <div className="number-inner-inner-info-bottom-part-home-page">8</div>
            <div className="text-infor-inner-inner-info-bottom-part-home-page">projects <br/> completed</div>
          </div>
          <div className="bottom-part-information-inner-info">
            <div className="number-inner-inner-info-bottom-part-home-page">3</div>
            <div className="text-infor-inner-inner-info-bottom-part-home-page">creators  <br/>worked with</div>
          </div>
        </div>
      </div>
    </div>
  );
}
