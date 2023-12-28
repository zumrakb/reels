import React, { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter.jsx";
import "./VideoCard.css";

const VideoCard = ({ url, likes, shares, channel, avatarSrc, song }) => {
  //usestate
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop.
      videoRef.current.pause();
      setIsVideoPlaying(false);
      console.log("if works");
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);

      console.log("else works");

      //play.
    }
  };

  //useRef

  return (
    <div className="videoCard">
      <VideoHeader />

      <video
        muted
        loop
        className="videoCard__player"
        src={url}
        onClick={onVideoPress}
        ref={videoRef}
      />

      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
};

export default VideoCard;
