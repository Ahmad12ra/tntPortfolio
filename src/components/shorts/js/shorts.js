import TopNav from "../../topNav/js/topNav";
import "../css/shorts.css";

export default function LongsComp() {
  return (
    <div className="container">
      <div className="shorts-page-main-container">
        <TopNav pageNumber={2} />
        <div className="middle-part-shorts-page-mian-container">
          <div className="short-holder-main-container"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
