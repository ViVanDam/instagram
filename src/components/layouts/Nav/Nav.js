import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLayoutEffect } from "react";

import Search from "../../Search";
import "./Nav.scss";
import logo from "../../../assets/logo/logoBlack.svg";
import {
  HomeIconWhite,
  HomeIconBlackActive,
  SearchIconBlack,
  SearchIconBlackActive,
  ExploreIconBlack,
  ExploreIconBlackActive,
  ReelsIconBlack,
  ReelsIconBlackActive,
  MessageIconBlack,
  MessageIconBlackActive,
  NotificationIconBlack,
  NotificationIconBlackActive,
  CreateIconBlack,
  CreateIconBlackActive,
  MenuBtnBlack,
  MenuBtnBlackActive,
  LogoIconBlack,
  SettingsIconBlack,
  ActivitiesIconBlack,
  ReportTroubleIconBlack,
  SwitchStateIconBlack,
  SaveIconBlack,
} from "../../Icons";
import avt from "../../../assets/avata/avt-user.jpg";

const itemList = [
  {
    icon: HomeIconWhite,
    iconActive: HomeIconBlackActive,
    title: "Trang chủ",
    to: "/",
    class: "home",
  },
  {
    icon: SearchIconBlack,
    iconActive: SearchIconBlackActive,
    title: "Tìm kiếm",
    // to: "#",
    class: "search",
  },
  {
    icon: ExploreIconBlack,
    iconActive: ExploreIconBlackActive,
    title: "Khám phá",
    to: "/explore",
    class: "explore",
  },
  {
    icon: ReelsIconBlack,
    iconActive: ReelsIconBlackActive,
    title: "Reels",
    to: "/reels",
    class: "reels",
  },
  {
    icon: MessageIconBlack,
    iconActive: MessageIconBlackActive,
    title: "Tin nhắn",
    to: "/message",
    class: "message",
  },
  {
    icon: NotificationIconBlack,
    iconActive: NotificationIconBlackActive,
    title: "Thông báo",
    to: "#",
    class: "notifications",
  },
  {
    icon: CreateIconBlack,
    iconActive: CreateIconBlackActive,
    title: "Tạo",
    class: "create",
    to: "#",
  },
  {
    icon: {},
    title: "Trang cá nhân",
    to: "/adam_gfb",
    avt: avt,
    class: "profile",
  },
];

function Nav() {
  const [isSmallMenu, setIsSmallMenu] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowBtnMenu, setIsShowBtnMenu] = useState(false);
  const [clickValue, setClickValue] = useState("");
  const activeNav = useRef(clickValue);
  // const location = useLocation();

  const resizeHandler = () => {
    const width = window.innerWidth;
    setIsSmallMenu(width < 1200 ? true : false);
  };

  const setActiveNavItem = () => {
    const location = window.location.href;
    if (location === "http://localhost:3000/") {
      setClickValue("home");
    } else if (location === "http://localhost:3000/explore") {
      setClickValue("explore");
    } else if (location === "http://localhost:3000/reels") {
      setClickValue("reels");
    } else if (location === "http://localhost:3000/message") {
      setClickValue("message");
    } else {
      setClickValue("profile");
    }
  };

  useLayoutEffect(() => {
    setActiveNavItem();
  }, []);

  useEffect(() => {
    resizeHandler();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const handleClick = (name) => {
    if (
      (name === "search" && clickValue !== "search") ||
      (name === "notifications" && clickValue !== "notifications")
    ) {
      setIsShowModal(true);
      setIsSmallMenu(true);
      setClickValue(name);
    } else if (
      (name === "search" && clickValue === "search") ||
      (name === "notifications" && clickValue === "notifications")
    ) {
      setIsShowModal(false);
      setIsSmallMenu(false);
      setClickValue(activeNav.current);
      setActiveNavItem();
    } else if (
      (name === "reels" && clickValue !== "reels") ||
      (name === "explore" && clickValue !== "explore") ||
      (name === "create" && clickValue !== "create") ||
      (name === "message" && clickValue !== "message")
    ) {
      setClickValue(name);
    } else if (
      (name === "reels" && clickValue === "reels") ||
      (name === "explore" && clickValue === "explore") ||
      (name === "create" && clickValue === "create") ||
      (name === "message" && clickValue === "message")
    ) {
      setClickValue(activeNav.current);
      setActiveNavItem();
    } else {
      setClickValue(activeNav.current);
      setActiveNavItem();
    }
  };

  const handleNavItemActive = () => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }

      if (item.classList.contains(clickValue)) {
        item.classList.add("active");
      }
    });
  };

  useEffect(() => {
    handleNavItemActive();
  });

  // useEffect(() => {
  //   const btnMenu = document.querySelector(".btn-menu-content");
  //   document.querySelector(".btn-menu-content").addEventListener("click", function() {
  //     this.style.display = "none";
  //   });

  // });

  // useEffect(() => {
  //   // Lấy tham chiếu đến modal.
  //   const searchModal = document.querySelector(
  //     ".modal-wrapper.search-modal.show"
  //   );

  //   if (searchModal) {
  //     // Lấy sự kiện click trên document.
  //     document.addEventListener("click", (event) => {
  //       // Kiểm tra xem người dùng có click vào modal hay không.
  //       if (event.target !== searchModal) {
  //         setIsShowModal(false);
  //         setIsSmallMenu(false);
  //       }
  //     });
  //   }

  //   return () => {
  //     // Tắt sự kiện click trên document.
  //     if (searchModal) {
  //       document.removeEventListener("click", (event) => {});
  //     }
  //   };
  // }, []);

  const handleShowBtnMenu = () => {
    setIsShowBtnMenu(!isShowBtnMenu);
  };

  return (
    <div className={isSmallMenu === true ? "nav-wrapper small" : "nav-wrapper"}>
      <div className="logo-icon">
        <LogoIconBlack />
      </div>
      <div className="logo-icon-wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-list">
        {itemList.map((item, index) => {
          const Icon = item.icon;
          const IconActive = item.iconActive;
          const addClass = item.class ? item.class : "";
          const classes = "nav-item " + addClass;
          const comp = (
            <Link
              key={index}
              className={classes}
              to={item.to}
              onClick={() => {
                handleClick(item.class);
              }}
            >
              <div className="nav-icon">
                {item.avt ? (
                  <div className="profile-nav-item-wrapper">
                    <div className="border-active"></div>
                    <img src={item.avt} alt="avt-user" />
                  </div>
                ) : (
                  <>
                    <Icon /> <IconActive className="icon-active" />
                  </>
                )}
              </div>
              <span>{item.title}</span>
            </Link>
          );
          return comp;
        })}
      </div>
      <div className="btn-menu" onClick={handleShowBtnMenu}>
        <div className={isShowBtnMenu === true ? "wrapper active" : "wrapper"}>
          <div className="btn-menu-icon">
            <MenuBtnBlack />
            <MenuBtnBlackActive className="icon-active" />
          </div>
          <div className="title">
            <span>Xem thêm</span>
          </div>
        </div>
      </div>
      <div
        className={
          isShowModal === true && clickValue === "notifications"
            ? "modal-wrapper notifications-modal show"
            : "modal-wrapper notifications-modal"
        }
      >
        notifications
      </div>
      <div
        className={
          isShowModal === true && clickValue === "search"
            ? "modal-wrapper search-modal show"
            : "modal-wrapper search-modal"
        }
      >
        <Search />
      </div>
      {isShowBtnMenu && (
        <div className="btn-menu-content">
          <div className="btn-menu-top menu-item-list">
            <Link className="btn-menu-item" to={"#"}>
              <div className="btn-menu-item-icon">
                <SettingsIconBlack />
              </div>
              <span>Cài đặt</span>
            </Link>
            <Link className="btn-menu-item" to={"#"}>
              <div className="btn-menu-item-icon">
                <ActivitiesIconBlack />
              </div>
              <span>Hoạt động của bạn</span>
            </Link>
            <Link className="btn-menu-item" to={"#"}>
              <div className="btn-menu-item-icon">
                <SaveIconBlack />
              </div>
              <span>Đã lưu</span>
            </Link>
            <Link className="btn-menu-item" to={"#"}>
              <div className="btn-menu-item-icon">
                <SwitchStateIconBlack />
              </div>
              <span>Chuyển đổi chế độ</span>
            </Link>
            <Link className="btn-menu-item" to={"#"}>
              <div className="btn-menu-item-icon">
                <ReportTroubleIconBlack />
              </div>
              <span>Báo cáo sự cố</span>
            </Link>
          </div>
          <div className="btn-menu-bottom menu-item-list">
            <Link className="btn-menu-item" to={"#"}>
              <span style={{ paddingLeft: "16px" }}>Chuyển tài khoản</span>
            </Link>
            <div className="border-sep"></div>
            <Link className="btn-menu-item" to={"#"}>
              <span style={{ paddingLeft: "16px" }}>Đăng xuất</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
