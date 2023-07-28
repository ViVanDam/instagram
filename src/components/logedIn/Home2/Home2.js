import "./Home2.scss";
import Nav from "../../layouts/Nav";
import HomeStoriesList from "../../HomeStoriesList/HomeStoriesList";
import UserInfoBasic from "../../UserInfoBasic/UserInfoBasic";
import PostItem from "../../PostItem/PostItem";
import Footer from "../../Footer/Footer";
import avt from "../../../assets/avata/avt-user.jpg";
import pi1 from "../../../assets/post/post-img-1.jpg";
import pi21 from "../../../assets/post/pi21.jpg";
import pi22 from "../../../assets/post/pi22.jpg";
import pi23 from "../../../assets/post/pi23.jpg";

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

function Home2() {
  const posts = postList;
  const stories = storyList;
  return (
    <div className="home2-wrapper">
      <div className="main-menu">
        <Nav />
      </div>
      <div className="content-wrapper">
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
            />
            <span className="switch-account">Chuyển</span>
          </div>
          <div className="suggest-header">
            <span className="suggest-title">Gợi ý cho bạn</span>
            <span className="see-all">Xem tất cả</span>
          </div>
          <div className="right-footer">
            <Footer left={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
