import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home_page/js/home";
import ErrorPage from "./components/error_page/js/error";
import LongsComp from "./components/longs/js/longs";
import ShortsComp from "./components/shorts/js/shorts";
import PricesComp from "./components/prices/js/prices";
import { useEffect, useState, useRef, createContext } from "react";
import shortenNumber from "./components/shortenNumber";
import "./css/all.css";
import "./app.css";
export const UseContextValues = createContext();

function App() {
  const pageTransMainContainer = useRef(null);
  const [beterVideo, setBeterVideo] = useState({});
  const [uryFirstVideo, setUryFirstVideo] = useState({});
  const [urySecondVideo, setUrySecondVideo] = useState({});
  const [gamingCenterFirstShort, setGamingCenterFirstShort] = useState({});
  const [gamingCenterSecondShort, setGamingCenterSecondShort] = useState({});
  const [gamingCenterThirdShort, setGamingCenterThirdShort] = useState({});
  const [beterSubs, setBeterSubs] = useState({});
  const [gamingCenterSubs, setGamingCenterSubs] = useState({});
  const [urySubs, setUrySubs] = useState({});
  const [fetchingResult, setFetchingResult] = useState(0);
  const [transDelayTime, setTransDelaytime] = useState(0);

  useEffect(() => setTransDelaytime(500), [])

  function pageTransitionUp() {
    Array.from(pageTransMainContainer.current.children).forEach((ele, ind) => {
      setTimeout(() => (ele.style.cssText = "height: 100%"), ind * 20);
    });
  }

  function pageTransitionDown() {
      Array.from(pageTransMainContainer.current.children).forEach(
        (ele, ind) => {
          setTimeout(() => (ele.style.cssText = "height: 0%"), ind * 20);
        }
      );
  }

  async function getVideoDetails(videoId, setState) {
      const url =
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=AIzaSyBJ85QCBvnA9uuo7BMsWKA1Cud0I_VKzjE`;
      const options = {
        method: "GET"
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setFetchingResult(value => (value+1));
        const views = shortenNumber(Number(result.items[0].statistics.viewCount));
        const likes = shortenNumber(Number(result.items[0].statistics.likeCount));
        const thumbnail = result.items[0].snippet.thumbnails.maxres.url;
        setState({views, likes, thumbnail});
      } catch (error) {
        console.error(error);
      }
    }
  
    async function getChannelDetails(channelId, setState) {
      setFetchingResult(value => (value+1))
      const url =
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=AIzaSyBJ85QCBvnA9uuo7BMsWKA1Cud0I_VKzjE`;
      const options = {
        method: "GET"
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        const subscribers = shortenNumber(Number(result.items[0].statistics.subscriberCount));
        setState({subscribers})
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getVideoDetails("END0JE8ankw",  setBeterVideo);
      getChannelDetails("UCXerYgG342gmfpTahEzbgRA", setBeterSubs);

      getVideoDetails("NIZzyjJch14", setUryFirstVideo);
      getChannelDetails("UCY97TTrIVF1mvpYo0YcgbcQ", setUrySubs);

      getVideoDetails("5vBALv08_Rg", setUrySecondVideo);

      getVideoDetails("O6iftECQvJk",setGamingCenterFirstShort);
      getChannelDetails("UCFx3j0DLkcCU3aTKJnb8-Ug", setGamingCenterSubs);

      getVideoDetails("9Dot_x3EijQ", setGamingCenterSecondShort);
      
      getVideoDetails("7cc3UlVGMFI", setGamingCenterThirdShort);
    }, []);

  return (
    <>
      <UseContextValues.Provider
        value={{
          beterVideo,
          uryFirstVideo,
          urySecondVideo,
          gamingCenterFirstShort,
          gamingCenterSecondShort,
          gamingCenterThirdShort,
          beterSubs,
          urySubs,
          gamingCenterSubs,
          fetchingResult,
          pageTransitionUp,
          pageTransitionDown,
          transDelayTime
        }}
      >
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos" element={<LongsComp />} />
            <Route path="/shorts" element={<ShortsComp />} />
            <Route path="/prices" element={<PricesComp />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </HashRouter>
      </UseContextValues.Provider>
      <div
        ref={pageTransMainContainer}
        className="page-transition-main-container"
      >
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
        <div className="page-trans-inner-baby"></div>
      </div>
    </>
  );
}

export default App;
