import "../css/nav.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav(props) {
  const nav = useNavigate();
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  const thirdElement = useRef(null);
  const fourthElement = useRef(null);

  useEffect(() => {
    if (props.show) {
      setTimeout(
        () => (firstElement.current.style.cssText = "height: 200px"),
        0
      );
      setTimeout(
        () => (secondElement.current.style.cssText = "height: 100%"),
        100
      );
      setTimeout(() => {
        thirdElement.current.style.cssText = "height: 100%";
        setTimeout(() => {
          firstElement.current.style.cssText =
            "height: 200px; border-top: 1px solid var(--secondary-color); border-top-right-radius: 10px; border-top-left-radius: 10px;";
          fourthElement.current.style.cssText = "opacity: 1;";
        }, 500);
      }, 200);
    }
  }, [props.show]);

  if (props.show) {
    return (
      <div
        ref={firstElement}
        className={`bottom-nav-main-container ${props.goDown}`}
      >
        <div ref={secondElement} className="second-trasition-bottom-nav"></div>
        <div ref={thirdElement} className="third-transition-bottom-nav"></div>
        <div
          ref={fourthElement}
          className="bottom-content-bottom-nav-main-container"
        >
          <div
            onClick={() => nav("/")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 0 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Home
          </div>
          <div
            onClick={() => nav("/videos")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 1 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Videos
          </div>
          <div
            onClick={() => nav("/shorts")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 2 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Shorts
          </div>
          <a
          href="https://www.instagram.com/tntyt_1/"
          target="_blank"
          rel="noopener noreferrer"
           className="bottom-nav-navigation-content-me">Contact Me</a>
        </div>
      </div>
    );
  }
}
