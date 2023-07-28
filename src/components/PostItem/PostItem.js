import { useState, useEffect, useRef } from "react";

import "./PostItem.scss";
import UserInfoBasic from "../UserInfoBasic/UserInfoBasic";
import loader from "../../assets/icon/Iphone-spinner-2.gif";
import {
  MoreIconBlack,
  HeartIconBlack,
  HeartIconActive,
  ShareIconBlack,
  CommentIconBlack,
  SaveIconBlack,
  SaveIconBlackActive,
  EmojiIcon,
  HeartIconBlackSetSize,
} from "../Icons";

function PostItem(post) {
  const props = post.post;
  const PostImages = props.images;
  const addProps = {
    direction: "horiz",
    size: "32",
    ...props,
  };

  const sliderRef = useRef(null);
  const [showBtn, setShowBtn] = useState(false);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(true);

  useEffect(() => {
    if (PostImages.length > 1) {
      setShowBtn(true);
    }
  }, [PostImages.length]);

  useEffect(() => {
    const storiesWrapper = sliderRef.current;

    const handleScroll = () => {
      if (storiesWrapper.scrollLeft === 0) {
        setShowPrevBtn(false);
      } else {
        setShowPrevBtn(true);
      }
      // + storiesWrapper.offsetWidth
      if (storiesWrapper.scrollLeft === storiesWrapper.scrollWidth) {
        setShowNextBtn(false);
      } else {
        setShowNextBtn(true);
      }
    };

    storiesWrapper.addEventListener("scroll", handleScroll);

    return () => {
      storiesWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNextSlide = () => {
    const storiesWrapper = sliderRef.current;
    storiesWrapper.scrollTo({
      left: storiesWrapper.scrollLeft + storiesWrapper.offsetWidth,
      behavior: "smooth",
    });
  };

  const handlePrevSlide = () => {
    const storiesWrapper = sliderRef.current;
    storiesWrapper.scrollTo({
      left: storiesWrapper.scrollLeft - storiesWrapper.offsetWidth,
      behavior: "smooth",
    });
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dots] = useState([...Array(PostImages.length).keys()]);

  useEffect(() => {
    // Set the initial slide to the first image
    setCurrentSlide(0);
  }, []);

  const [likePost, setLikePost] = useState(false);

  const handleLikePost = () => {
    setLikePost(!likePost);
  };

  const [savePost, setSavePost] = useState(false);

  const handleSavePost = () => {
    setSavePost(!savePost);
  };

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (props.caption.length > 100) {
      setShowMore(true);
    }
  }, [props.caption.length]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandCaption = () => {
    setExpanded(!expanded);
    setShowMore(false);
  };

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [yourComment, setYourComment] = useState([]);
  const [commentList, setCommentList] = useState(props.comments);

  const addYourCommentToCommentList = (username, comment) => {
    const commentItem = { username, comment };
    setCommentList([...commentList, commentItem]);
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    setTimeout(() => {
      const newYourComment = [...yourComment, comment];
      setYourComment(newYourComment);
      setComment("");
      addYourCommentToCommentList(props.username, yourComment);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="post-wrapper">
      <div className="header-post">
        <UserInfoBasic {...addProps} />
        <div className="settings">
          <MoreIconBlack />
        </div>
      </div>
      <div className="images-post">
        <div className="image-wrapper" ref={sliderRef}>
          {PostImages.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="post img"
                onClick={() => setCurrentSlide(index)}
              />
            );
          })}
        </div>
        {showPrevBtn && showBtn && (
          <div className="prev-btn" onClick={handlePrevSlide}>
            <div className="prev-img"></div>
          </div>
        )}
        {showNextBtn && showBtn && (
          <div className="next-btn" onClick={handleNextSlide}>
            <div className="next-img"></div>
          </div>
        )}
        <div className="slider-dots">
          {dots.map((dot, i) => (
            <div
              key={i}
              className={
                dot === currentSlide ? "slider-dot-active" : "slider-dot"
              }
            />
          ))}
        </div>
      </div>
      <div className="interact-icons">
        <div className="left-icons">
          <div className="icon" onClick={handleLikePost}>
            {likePost === true ? <HeartIconActive /> : <HeartIconBlack />}
          </div>
          <div className="icon">
            <CommentIconBlack />
          </div>
          <div className="icon">
            <ShareIconBlack />
          </div>
        </div>
        <div className="right-icon">
          <div className="icon" onClick={handleSavePost}>
            {savePost === true ? <SaveIconBlackActive /> : <SaveIconBlack />}
          </div>
        </div>
      </div>
      <div className="like-person">
        {props.likes < 10 ? (
          <p>
            Có
            <span className="person"> min_2021</span> và
            <span className="person"> {props.likes} người khác</span> đã thích
          </p>
        ) : (
          <p className="quantity">{props.likes} lượt thích</p>
        )}
      </div>
      <div className="post-caption">
        {expanded === true ? (
          <p className="caption-expanded">
            <span className="username">{props.username} </span>
            {props.caption}
          </p>
        ) : (
          <p className="caption-default">
            <span className="username">{props.username} </span>
            {props.caption}
          </p>
        )}
        {showMore && (
          <>
            <div>...</div>
            <div className="more-btn" onClick={handleExpandCaption}>
              Xem thêm
            </div>
          </>
        )}
      </div>
      <div className="comment-view">
        Xem tất cả <span> {commentList.length} </span> bình luận
      </div>
      {yourComment &&
        yourComment.map((comment, index) => {
          return (
            <div key={index} className="your-comment-wrapper">
              <div className="your-comment">
                <span className="username">{props.username} </span>
                <p> {comment}</p>{" "}
              </div>
              <span>
                <HeartIconBlackSetSize size={13} />
              </span>
            </div>
          );
        })}
      <div className="comment-action">
        <form>
          <div className="comment-input-wrapper">
            <input
              type="text"
              name="comment"
              className="comment-input"
              placeholder="Add a comment..."
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              autoComplete="off"
            />
            <div className="emoji-icon">
              <EmojiIcon />
            </div>
          </div>
          <button
            className="upload-btn"
            type="submit"
            value={"Đăng"}
            hidden={comment === "" ? true : false}
            onClick={handleSubmit}
          >
            Đăng
          </button>
        </form>
        {loading === true && (
          <div className="loading-wrapper">
            <img className="loading" src={loader} alt="loading" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostItem;
