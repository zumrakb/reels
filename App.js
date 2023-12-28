import React from "react";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./App.css";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    //bem naming convention
    <div className="app">
      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }, id) => {
          return (
            <VideoCard
              key={id}
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
