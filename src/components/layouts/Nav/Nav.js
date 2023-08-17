import { NavLink } from "react-router-dom";

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
} from "../../Icons";
import avt from "../../../assets/avata/avt-user.jpg";
import { useState, useEffect } from "react";

const itemList = [
  {
    icon: HomeIconWhite,
    iconActive: HomeIconBlackActive,
    title: "Trang chủ",
    to: "/",
  },
  {
    icon: SearchIconBlack,
    iconActive: SearchIconBlackActive,
    title: "Tìm kiếm",
    // to: "#",
  },
  {
    icon: ExploreIconBlack,
    iconActive: ExploreIconBlackActive,
    title: "Khám phá",
    to: "/explore",
  },
  {
    icon: ReelsIconBlack,
    iconActive: ReelsIconBlackActive,
    title: "Reels",
    to: "/reels",
  },
  {
    icon: MessageIconBlack,
    iconActive: MessageIconBlackActive,
    title: "Tin nhắn",
    to: "/home",
  },
  {
    icon: NotificationIconBlack,
    iconActive: NotificationIconBlackActive,
    title: "Thông báo",
    to: "#",
  },
  {
    icon: CreateIconBlack,
    iconActive: CreateIconBlackActive,
    title: "Tạo",
    to: "#",
  },
  { icon: {}, title: "Trang cá nhân", to: "/adam_gfb", avt: avt },
];

function Nav() {
  const [isSmallMenu, setIsSmallMenu] = useState(null);

  const resizeHandler = () => {
    const width = window.innerWidth;
    setIsSmallMenu(width < 1200 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("reload", resizeHandler);
    return () => window.removeEventListener("reload", resizeHandler);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="nav-wrapper">
      {isSmallMenu === true ? (
        <div className="logo-icon">
          <LogoIconBlack />
        </div>
      ) : (
        <img className="logo" src={logo} alt="logo" />
      )}
      <div className="nav-list">
        {itemList.map((item, index) => {
          const Icon = item.icon;
          const IconActive = item.iconActive;
          const comp = (
            <NavLink key={index} className="nav-item" to={item.to}>
              <div className="nav-icon">
                {item.avt ? (
                  <img src={item.avt} alt="avt-user" />
                ) : (
                  <>
                    <Icon /> <IconActive className="icon-active" />
                  </>
                )}
              </div>
              <span>{item.title}</span>
            </NavLink>
          );
          return comp;
        })}
      </div>
      <div className="btn-menu">
        <div className="wrapper">
          <div className="btn-menu-icon">
            <MenuBtnBlack />
            <MenuBtnBlackActive className="icon-active" />
          </div>
          <div className="title">
            <span>Xem thêm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
