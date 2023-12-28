import React from "react";
import "./VideoFooter.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Button, Avatar } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = ({ channel, song, likes, shares, avatarSrc }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} • <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <h1 className="ticker">{song}</h1>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteBorderIcon style={{ width: "25px", height: "25px" }} />
          <ModeCommentIcon style={{ width: "25px", height: "25px" }} />
          <SendIcon style={{ width: "25px", height: "25px" }} />
          <MoreHorizIcon style={{ width: "25px", height: "25px" }} />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteBorderIcon />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
