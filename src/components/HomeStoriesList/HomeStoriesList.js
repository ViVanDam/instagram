import { useRef, useState, useEffect } from "react";

import "./HomeStoriesList.scss";
import UserInfoBasic from "../UserInfoBasic/UserInfoBasic";

function HomeStoriesList(storyList) {
  const stories = storyList.storyList;

  const sliderRef = useRef(null);

  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(true);

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

  return (
    <div className="stories-wrapper">
      <div className="item-wrapper" ref={sliderRef}>
        {stories.map((item, index) => {
          return (
            <UserInfoBasic
              key={index}
              avt={item.logo}
              username={item.username}
              direction="verti"
            />
          );
        })}
      </div>
      {showPrevBtn && (
        <div className="prev-btn" onClick={handlePrevSlide}>
          <div className="prev-img"></div>
        </div>
      )}
      {showNextBtn && (
        <div className="next-btn" onClick={handleNextSlide}>
          <div className="next-img"></div>
        </div>
      )}
    </div>
  );
}

export default HomeStoriesList;
