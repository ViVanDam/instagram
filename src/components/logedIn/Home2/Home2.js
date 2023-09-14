import "./Home2.scss";
import HomeStoriesList from "../../HomeStoriesList/HomeStoriesList";
import UserInfoBasic from "../../UserInfoBasic/UserInfoBasic";
import PostItem from "../../PostItem/PostItem";
import Footer from "../../Footer/Footer";
import avt from "../../../assets/avata/avt-user.jpg";
import pi1 from "../../../assets/post/post-img-1.jpg";
import pi21 from "../../../assets/post/pi21.jpg";
import pi22 from "../../../assets/post/pi22.jpg";
import pi23 from "../../../assets/post/pi23.jpg";
import { useState } from "react";

const storyList = [
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
  { logo: avt, username: "adam_gfb" },
];

const postList = [
  {
    id: 1,
    avt: avt,
    extraInfo: "Mới tham gia Instagram",
    username: "adam_gfb",
    fullName: "Võ Chúc Duyên",
    time: "2 ngày",
    likes: 6,
    sound: "Âm thanh gốc",
    location: "Đà Nẵng",
    caption: "𝒞𝑜𝓂𝑒 𝒽𝑜𝓂𝑒 𝒷𝒶𝑒 🥱",
    blueTick: true,
    comments: [
      { username: "abcxyz123", comment: "xinh quá xinh quá" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi1],
  },
  {
    id: 2,
    avt: avt,
    extraInfo: "Có adam_gfb theo dõi",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "Thằng điên | Justatee ft Phương Ly",
    location: "",
    caption: "𝒞𝑜𝓂𝑒 𝒽𝑜𝓂𝑒 𝒷𝒶𝑒 🥱",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "xinh quá xinh quá" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi1],
  },
  {
    id: 3,
    avt: avt,
    extraInfo: "Có adam_gfb theo dõi",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "Hà Nội",
    caption: "𝒞𝑜𝓂𝑒 𝒽𝑜𝓂𝑒 𝒷𝒶𝑒 🥱",
    blueTick: true,
    comments: [
      { username: "abcxyz123", comment: "xinh quá xinh quá" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi1],
  },
  {
    id: 4,
    avt: avt,
    extraInfo: "Mới tham gia Instagram",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption: "𝒞𝑜𝓂𝑒 𝒽𝑜𝓂𝑒 𝒷𝒶𝑒 🥱",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "xinh quá xinh quá" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi1],
  },
  {
    id: 5,
    avt: avt,
    extraInfo: "Có adam_gfb theo dõi",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption: "𝒞𝑜𝓂𝑒 𝒽𝑜𝓂𝑒 𝒷𝒶𝑒 🥱",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "xinh quá xinh quá" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi1],
  },
  {
    id: 6,
    avt: avt,
    extraInfo: "Mới tham gia Instagram",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "Hồ Chí Minh",
    caption: "𝒞𝑜𝓂𝑒 𝒽𝑜𝓂𝑒 𝒷𝒶𝑒 🥱",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "xinh quá xinh quá" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi1],
  },
  {
    id: 7,
    avt: avt,
    extraInfo: "",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption:
      "Những điều bạn nên biết sớm hơn khi text dài hơn 30 kỹ tự hay xuống dòng thì chuyển text còn 30 kĩ tự và cuối dòng có Mùa hạ năm ấy, vì một người mà ánh nắng như dịu dàng hơn",
    blueTick: true,
    comments: [
      { username: "abcxyz123", comment: "giá mà mình biết sớm hơn nhỉ!" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi21, pi22, pi23],
  },
  {
    id: 8,
    avt: avt,
    extraInfo: "",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption: "Những điều bạn nên biết sớm hơn",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "giá mà mình biết sớm hơn nhỉ!" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi21, pi22, pi23],
  },
  {
    id: 9,
    avt: avt,
    extraInfo: "",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption: "Những điều bạn nên biết sớm hơn",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "giá mà mình biết sớm hơn nhỉ!" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi21, pi22, pi23],
  },
  {
    id: 10,
    avt: avt,
    extraInfo: "",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption: "Những điều bạn nên biết sớm hơn",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "giá mà mình biết sớm hơn nhỉ!" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi21, pi22, pi23],
  },
  {
    id: 11,
    avt: avt,
    extraInfo: "",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "",
    caption: "Những điều bạn nên biết sớm hơn",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "giá mà mình biết sớm hơn nhỉ!" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi21, pi22, pi23],
  },
  {
    id: 12,
    avt: avt,
    extraInfo: "",
    username: "adam_gfb",
    fullName: "Nguyễn Hoàng Bảo Bảo",
    time: "2 ngày",
    likes: 200,
    sound: "",
    location: "Singapore",
    caption: "Những điều bạn nên biết sớm hơn",
    blueTick: false,
    comments: [
      { username: "abcxyz123", comment: "giá mà mình biết sớm hơn nhỉ!" },
      { username: "xyzabc321", comment: "ôi đẹp quá đi! ôi đẹp quá đi!" },
    ],
    images: [pi21, pi22, pi23],
  },
];

const suggestAccountsFake = postList.filter((object) => object.extraInfo);
suggestAccountsFake.map((item) => {
  item.following = false;
  item.private = false;
  return item;
});

const suggestAccountList = suggestAccountsFake.filter((object, index) => {
  if (index % 2 !== 0) {
    object.private = true;
  }
  return object;
});

function Home2() {
  const posts = postList;
  const stories = storyList;

  const [suggestAccounts, setSuggestAccounts] = useState(suggestAccountList);

  const handleClick = (item) => {
    const newList = suggestAccounts.map((it) => {
      if (it === item) {
        it.following = !it.following;
      }
      return it;
    });

    // Update the suggestAccountList with the new state.
    setSuggestAccounts(newList);
  };

  return (
    <div className="content-wrapper home2">
      <div className="center-content">
        <HomeStoriesList storyList={stories} />
        <div className="post-list">
          {posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </div>
      </div>
      <div className="right-content">
        <div className="your-account">
          <UserInfoBasic
            avt={avt}
            username={"adam_gfb"}
            fullname="Vi Văn Đảm"
            direction="horiz"
            size="48"
          />
          <span className="switch-account">Chuyển</span>
        </div>
        <div className="suggest-header">
          <span className="suggest-title">Gợi ý cho bạn</span>
          <span className="see-all">Xem tất cả</span>
        </div>
        {suggestAccountList.map((item) => {
          return (
            <div key={item.id} className="suggest-account">
              <div className="suggest-account-info">
                <UserInfoBasic
                  avt={item.avt}
                  username={item.username}
                  extraInfo={item.extraInfo}
                  direction="horiz"
                  size="32"
                />
              </div>
              {item.following !== true ? (
                <span className="follow-btn" onClick={() => handleClick(item)}>
                  Theo dõi
                </span>
              ) : (
                <span
                  className="follow-btn followed"
                  onClick={() => handleClick(item)}
                >
                  {item.private === true ? "Đã yêu cầu" : "Đang theo dõi"}
                </span>
              )}
            </div>
          );
        })}
        <div className="right-footer">
          <Footer left={true} />
        </div>
      </div>
    </div>
  );
}

export default Home2;
