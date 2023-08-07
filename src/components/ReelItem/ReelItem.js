import { useState, useEffect, useRef } from "react";

import "./ReelItem.scss";
import UserInfoBasic from "../UserInfoBasic/UserInfoBasic";
import {
  MoreIconBlack,
  UnMuteIconWhite,
  MuteIconWhite,
  PlayBtnIconWhite,
  HeartIconBlack,
  HeartIconActive,
  ShareIconBlack,
  CommentIconBlack,
  SaveIconBlack,
  MusicIconWhite,
  // SaveIconBlackActive,
  // EmojiIcon,
  // HeartIconBlackSetSize,
} from "../Icons";

function ReelItem(item) {
  const reel = item.reel;

  const addProps = {
    direction: "horiz",
    size: "32",
    avt: reel.avt,
    username: reel.username,
    following: reel.following,
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);

  // const [videoId, setVideoId] = useState(reel.id);
  const handleClickPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClickHeart = () => {
    setLiked(!liked);
  };

  var handlePlay = () => {
    if (isPlaying) {
      setShowPlayBtn(false);
      videoRef.current.play();
    } else {
      setShowPlayBtn(true);
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    handlePlay();
  }, [isPlaying]);

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <div className="reel-wrapper">
      <div className="reel-left">
        <div className="reel-video">
          <video
            className="video"
            width={384 + "px"}
            ref={videoRef}
            src={reel.video}
            loop={true}
            autoPlay={isPlaying}
            muted={mute}
            onClick={handleClickPlay}
            // controls
          ></video>
        </div>
        <div className="reel-content">
          <UserInfoBasic {...addProps} />
          <div className="reel-caption">{reel.caption}</div>
          <div className="reel-sound">
            <div className="sound-icon">
              <MusicIconWhite />
            </div>
            <div className="sound-name">{reel.sound}</div>
          </div>
        </div>
        <div className="settings" onClick={handleMute}>
          {mute === true ? <MuteIconWhite /> : <UnMuteIconWhite />}
        </div>
        {showPlayBtn === true && (
          <div className="play-wrapper" onClick={handleClickPlay}>
            <PlayBtnIconWhite />
          </div>
        )}
      </div>
      <div className="reel-right">
        <div className="icon-list">
          <div className="icon-wrapper heart" onClick={handleClickHeart}>
            {liked === false ? <HeartIconBlack /> : <HeartIconActive />}
            <span className="likes">{reel.like}</span>
          </div>
          <div className="icon-wrapper comment">
            <CommentIconBlack />
            <span className="comments">{reel.comments}</span>
          </div>
          <div className="icon-wrapper share">
            <ShareIconBlack />
          </div>
          <div className="icon-wrapper save">
            <SaveIconBlack />
          </div>
          <div className="icon-wrapper more">
            <MoreIconBlack />
          </div>
          <div className="icon-wrapper avt">
            <img
              src={reel.avt}
              alt="avt"
              width={24 + "px"}
              height={24 + "px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReelItem;
