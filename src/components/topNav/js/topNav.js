import "../css/topNav.css";
import BottomNav from "../../bottom_nav/js/nav";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { UseContextValues } from "../../../App";
export default function TopNav(props) {
  const triggerTransPage = useContext(UseContextValues);
  const nav = useNavigate();
  const [showBottomNavState, setShowBottomNavState] = useState(false);
  const [bottomNavGoDown, setBottomNavGoDown] = useState(null);
  const bottomNavTrap = useRef(null);

  function showBottomNav() {
    setShowBottomNavState(true);
    activeBottomNavTrap();
  }

  function activeBottomNavTrap() {
    bottomNavTrap.current.style.cssText = "display: block";
    setTimeout(
      () =>
        (bottomNavTrap.current.style.cssText = "opacity: 0.2; display: block"),
      0
    );
    bottomNavTrap.current.onclick = function () {
      console.log("clicked");

      setBottomNavGoDown("go-down");
      setTimeout(() => {
        setShowBottomNavState(false);
        setBottomNavGoDown(null);
      }, 200);
      bottomNavTrap.current.style.cssText = "opacity: 0; display: block";
      setTimeout(
        () =>
          (bottomNavTrap.current.style.cssText = "opacity: 0; display: none"),
        200
      );
    };
  }

  return (
    <div className="top-nav-main-container">
      <div ref={bottomNavTrap} className="bottom-nav-trap-overlay"></div>
      <BottomNav show={showBottomNavState} pageNumber={props.pageNumber} goDown={bottomNavGoDown} />
      <div className="top-nav-logo-main-container">
        <span className="logo-name">Ahmed</span>
        <span className="dot-after-logo-name">
          <i class="fa-solid fa-circle"></i>
        </span>
      </div>
      <div className="top-nav-navigation-main-container">
        <div onClick={() => showBottomNav()} className="can-show">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div
          onClick={() => nav("/")}
          className={`top-nav-navigation-option can-hide ${
            props.pageNumber === 0 ? "top-nav-navigation-option-active" : ""
          }`}
        >
          Home
        </div>
        <div
          onClick={() => nav("/videos")}
          className={`top-nav-navigation-option can-hide ${
            props.pageNumber === 1 ? "top-nav-navigation-option-active" : ""
          }`}
        >
          Videos
        </div>
        <div
          onClick={() => {nav("/shorts")}}
          className={`top-nav-navigation-option can-hide ${
            props.pageNumber === 2 ? "top-nav-navigation-option-active" : ""
          }`}
        >
          Shorts
        </div>
        <a
          href="https://www.instagram.com/tntyt_1/"
          target="_blank"
          rel="noopener noreferrer"
          className="top-nav-contact-option can-hide"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
