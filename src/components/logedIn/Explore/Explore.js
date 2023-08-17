import { useState, useEffect } from "react";

import "./Explore.scss";
import GalleryPage from "../../GalleryPage/GalleryPage";
import Footer from "../../Footer/Footer";
import exR1 from "../../../assets/explorePage/ex-r-1.jpg";
import exR2 from "../../../assets/explorePage/ex-r-2.jpg";
import exR3 from "../../../assets/explorePage/ex-r-3.jpg";
import exP1 from "../../../assets/explorePage/ex-p-1.jpeg";
import exP2 from "../../../assets/explorePage/ex-p-2.jpg";
import exP3 from "../../../assets/explorePage/ex-p-3.jpg";
import exP4 from "../../../assets/explorePage/ex-p-4.jpg";
import loadIcon from "../../../assets/icon/Iphone-spinner-2.gif";
const galleryData = [
  {
    page: 1,
    items: [
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 2, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR1, count: 1, like: 100, comments: 12 },
      ],
    ],
  },
  {
    page: 2,
    items: [
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
      ],
    ],
  },
  {
    page: 3,
    items: [
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 2, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR3, count: 1, like: 100, comments: 12 },
      ],
    ],
  },
  {
    page: 4,
    items: [
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 4, like: 1050, comments: 1 },
        { type: "post", img: exP3, count: 1, like: 1060, comments: 123 },
      ],
      [
        { type: "post", img: exP1, count: 2, like: 100, comments: 512 },
        { type: "post", img: exP2, count: 3, like: 100, comments: 0 },
        { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR1, count: 1, like: 1090, comments: 412 },
      ],
    ],
  },
  {
    page: 5,
    items: [
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 2, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
      ],
      [
        { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
        { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
        { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
        { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
      ],
    ],
  },
];

function Explore() {
  const [gallery] = useState(galleryData);
  const [showGallery, setShowGallery] = useState([gallery[0]]);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const page = showGallery.length;
    console.log("page=", page);
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(
      "scrollTop=",
      scrollTop,
      "  clientHeight=",
      clientHeight,
      "   scrollHeight=",
      scrollHeight
    );
    if (scrollTop + clientHeight >= scrollHeight) {
      // Đến cuối trang, tiến hành tải thêm nội dung
      setLoading(true);
      if (loading) {
        setShowGallery([...showGallery, gallery[page]]);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="content-wrapper">
      <div className="gallery">
        {showGallery.map((item, index) => {
          return <GalleryPage key={index} data={item} />;
        })}
      </div>
      {loading && (
        <div className="loading">
          <img src={loadIcon} alt="loading-icon" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Explore;
