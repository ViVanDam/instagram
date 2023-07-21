import { useState, useEffect } from "react";

import "./Home.scss";
import TopAuthWrapper from "../Auth/TopAuthWrapper";
import MidAuthWrapper from "../Auth/MidAuthWrapper";
import BottomAuthWrapper from "../Auth/BottomAuthWrapper";
import Footer from "../Footer/Footer";
import mobileScreen1 from "../../assets/authPage/screenshot1.png";
import mobileScreen2 from "../../assets/authPage/screenshot2.png";
import mobileScreen3 from "../../assets/authPage/screenshot3.png";
import mobileScreen4 from "../../assets/authPage/screenshot4.png";

const mobileScreens = [
  mobileScreen1,
  mobileScreen2,
  mobileScreen3,
  mobileScreen4,
];
function Home() {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleImageClick = (index) => {
  //   setActiveIndex(index);
  // };

  const [imageSrc, setImageSrc] = useState(mobileScreen1);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = mobileScreens.indexOf(imageSrc) + 1;
      if (newIndex === mobileScreens.length) {
        newIndex = 0;
      }
      setImageSrc(mobileScreens[newIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageSrc, mobileScreens]);

  return (
    <div className="home-wrapper">
      <div className="content-home">
        <div className="left">
          <div className="screen-mobile">
            <img src={imageSrc} alt="mobile-screen" />
            {/* {mobileScreens.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="mobile-screen"
                className={index === activeIndex ? "active" : "hidden"}
                onClick={() => handleImageClick(index)}
              />
            ))} */}
          </div>
        </div>
        <div className="right">
          <TopAuthWrapper type="login" />
          <MidAuthWrapper />
          <BottomAuthWrapper />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
