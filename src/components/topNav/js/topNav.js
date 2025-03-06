import "../css/topNav.css";
import BottomNav from "../../bottom_nav/js/nav";
import { useState } from "react";
export default function TopNav(props) {

  const [showBottomNavState, setShowBottomNavState] = useState(false);

  

  function showBottomNav() {
    console.log("clicked")
  }

  return (


    <div className="top-nav-main-container">
      <BottomNav show={showBottomNavState}/>
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
          className={`top-nav-navigation-option can-hide ${
            props.pageNumber === 0 ? "top-nav-navigation-option-active" : ""
          }`}
        >
          Home
        </div>
        <div
          className={`top-nav-navigation-option can-hide ${
            props.pageNumber === 1 ? "top-nav-navigation-option-active" : ""
          }`}
        >
          Longs
        </div>
        <div
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
