import React, { useEffect, useRef } from "react";

const YouTubePlayer = ({ videoId, playerId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube IFrame API if it hasn't been loaded yet
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Function to initialize the player
    const initializePlayer = () => {
      playerRef.current = new window.YT.Player(playerId, {
        height: "135",
        width: "240",
        videoId: videoId,
        playerVars: {
          autoplay: 1, // Autoplay the video
          mute: 1, // Mute the video
          controls: 1, // Show video controls
        },
        events: {
          onReady: (event) => {
            event.target.mute(); // Ensure the video is muted
          },
        },
      });
    };

    // If the API is already loaded, initialize the player immediately
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      // Otherwise, wait for the API to be ready
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    // Cleanup function
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, playerId]);

  return (
    <div>
      <div id={playerId}></div>
    </div>
  );
};

export default YouTubePlayer;