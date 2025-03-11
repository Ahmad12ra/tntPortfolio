import "../css/nav.css";
import { useRef, useEffect, useContext } from "react";
import { UseContextValues } from "../../../App";
import { useNavigate } from "react-router-dom";

export default function BottomNav(props) {
  const info = useContext(UseContextValues);
  const nav = useNavigate();
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  const thirdElement = useRef(null);
  const fourthElement = useRef(null);

  function navToPage(path) {
    info.pageTransitionUp();
    setTimeout(() => {
      nav(path);
      info.pageTransitionDown();
    },info.transDelayTime);
  }

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
            onClick={() => navToPage("/")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 0 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Home
          </div>
          <div
            onClick={() => navToPage("/videos")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 1 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Videos
          </div>
          <div
            onClick={() => navToPage("/shorts")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 2 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Shorts
          </div>
          <div
            onClick={() => navToPage("/programs")}
            className={`bottom-nav-navigation-content ${props.pageNumber === 3 ? "bottom-nav-navigation-content-active" : ""}`}
          >
            Programs
          </div>
        </div>
      </div>
    );
  }
}
