import "./Reels.scss";
import ReelItem from "../../ReelItem/ReelItem";
import avt from "../../../assets/avata/avt-user.jpg";
import r2 from "../../../assets/reelsPage/reel-1.mp4";
import r1 from "../../../assets/reelsPage/reel-2.mp4";

const reels = [
  {
    id: 1,
    avt: avt,
    username: "adam_gfb",
    following: false,
    video: r1,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 2,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 3,
    avt: avt,
    username: "adam_gfb",
    following: false,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 4,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 5,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 6,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 7,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 8,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 9,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 10,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 11,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 12,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 13,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 14,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 15,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 16,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 17,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 18,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 19,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 20,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 21,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 22,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
  {
    id: 23,
    avt: avt,
    username: "adam_gfb",
    following: true,
    video: r2,
    caption: "Black Pink in your area",
    sound: "lửa hận thù...",
    like: 100,
    comments: 12,
  },
];

function Reels() {
  const reelList = reels;

  return (
    <div className="content-wrapper">
      <div className="reel-list">
        {reelList.map((reel) => {
          return (
            <div key={reel.id} className="reel-item">
              <ReelItem reel={reel} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reels;
