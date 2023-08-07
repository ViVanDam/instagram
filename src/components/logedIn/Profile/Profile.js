import "./Profile.scss";
import Nav from "../../layouts/Nav/Nav";

// const galleryData = [
//   {
//     page: 1,
//     items: [
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 2, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR1, count: 1, like: 100, comments: 12 },
//       ],
//     ],
//   },
//   {
//     page: 2,
//     items: [
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
//       ],
//     ],
//   },
//   {
//     page: 3,
//     items: [
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 2, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR3, count: 1, like: 100, comments: 12 },
//       ],
//     ],
//   },
//   {
//     page: 4,
//     items: [
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 4, like: 1050, comments: 1 },
//         { type: "post", img: exP3, count: 1, like: 1060, comments: 123 },
//       ],
//       [
//         { type: "post", img: exP1, count: 2, like: 100, comments: 512 },
//         { type: "post", img: exP2, count: 3, like: 100, comments: 0 },
//         { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR1, count: 1, like: 1090, comments: 412 },
//       ],
//     ],
//   },
//   {
//     page: 5,
//     items: [
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 4, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 2, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 6, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 9, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 5, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//       ],
//       [
//         { type: "post", img: exP1, count: 3, like: 100, comments: 12 },
//         { type: "post", img: exP2, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP3, count: 1, like: 100, comments: 12 },
//         { type: "post", img: exP4, count: 7, like: 100, comments: 12 },
//         { type: "reel", img: exR2, count: 1, like: 100, comments: 12 },
//       ],
//     ],
//   },
// ];

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="main-menu">
        <Nav />
      </div>
      <div className="content-wrapper">fdhgdfhdgdsh</div>
    </div>
  );
}

export default Profile;
