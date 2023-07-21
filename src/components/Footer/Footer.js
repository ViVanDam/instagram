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

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="top">
        {list.map((item, index) => {
          return (
            <Link className="link" to="/" key={index}>
              {item}
            </Link>
          );
        })}
      </div>
      <div className="bottom">
        {/* {/* <Tippy trigger> */}
        {/* <div>Xin chào các bạn</div> */}

        <span>
          English <FontAwesomeIcon icon={faAngleDown} />
        </span>
        {/* </Tippy> */}
        <span>© 2023 Instagram from Meta</span>
      </div>
    </div>
  );
}

export default Footer;
