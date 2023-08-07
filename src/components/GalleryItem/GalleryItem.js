import "./GalleryItem.scss";
import { ItemsIcon, ReelsIconWhiteActive } from "../Icons";

function GalleryItem(data) {
  const item = data.data;
  return (
    <div className="gallery-item">
      <img src={item.img} alt="item-img" />
      {item.count && item.count > 1 && (
        <span className="icon-wrapper">
          <ItemsIcon />
        </span>
      )}
      {item.type === "reel" && (
        <span className="icon-wrapper">
          <ReelsIconWhiteActive />
        </span>
      )}
      <div className="interact-wrapper">
        {item.like && item.like > 0 && (
          <span className="like">
            <span className="like-icon"></span>
            {item.like}
          </span>
        )}
        {item.comments && item.comments > 0 && (
          <span className="comments">
            <span className="comment-icon"></span>
            {item.comments}
          </span>
        )}
      </div>
    </div>
  );
}

export default GalleryItem;
