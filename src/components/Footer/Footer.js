import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import Tippy from "tippy.js/headless";
// import "tippy.js/dist/tippy.css";

const list = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Locations",
  "Instagram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

const VNList = [
  "Giới thiệu",
  "Trợ giúp",
  "Báo chí",
  "API",
  "Việc làm",
  "Quyền riêng tư",
  "Điều khoản",
  "Vị trí",
  "Ngôn ngữ",
  "Meta đã xác minh",
];

function Footer({ left = false }) {
  // const left = left.left;
  const justifyContent = left === true ? "left" : "center";
  const width = left === true && 100 + "%";
  const maxWidth = left === true && 100 + "%";
  const textTransform = left === true && "uppercase";

  return (
    <div
      className="footer-wrapper"
      style={{ width: width, maxWidth: maxWidth }}
    >
      <div className="top" style={{ justifyContent: justifyContent }}>
        {left === true
          ? VNList.map((item, index) => {
              return (
                <Link className="link" to="/" key={index}>
                  {item}
                </Link>
              );
            })
          : list.map((item, index) => {
              return (
                <Link className="link" to="/" key={index}>
                  {item}
                </Link>
              );
            })}
      </div>
      <div className="bottom" style={{ justifyContent: justifyContent }}>
        {/* {/* <Tippy trigger> */}
        {/* <div>Xin chào các bạn</div> */}
        {left === false && (
          <span>
            English <FontAwesomeIcon icon={faAngleDown} />
          </span>
        )}
        {/* </Tippy> */}
        <span style={{ textTransform: textTransform }}>
          © 2023 Instagram from Meta
        </span>
      </div>
    </div>
  );
}

export default Footer;
