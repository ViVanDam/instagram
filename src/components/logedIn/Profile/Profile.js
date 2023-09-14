import "./Profile.scss";
import data from "./profile.json";
import Footer from "../../Footer";
import Button from "../../Auth/Button/Button";
import {
  PlusIcon,
  PostIcon,
  PostIconBlack,
  SaveIcon,
  SaveIconActive,
  SettingsIconBlack,
  TagedIcon,
  TagedIconBlack,
  ItemsIcon,
} from "../../Icons";
import avt from "../../../assets/avata/avt-user.jpg";
import postImg from "../../../assets/explorePage/ex-p-1.jpeg";
import { useState } from "react";
import { useEffect } from "react";
function Profile() {
  const profileData = data;
  profileData.avt = avt;
  profileData.post.forEach((item) => {
    return item.images.map((item) => {
      return (item.src = postImg);
    });
  });

  const [isActiveType, setIsActiveType] = useState("post");

  useEffect(() => {
    const href = "http://localhost:3000/adam_gfb";
    if (isActiveType === "post") {
      window.history.pushState("", "", href);
    } else if (isActiveType === "save") {
      window.history.pushState("", "", href + "/save");
    } else {
      window.history.pushState("", "", href + "/taged");
    }
  }, [isActiveType]);

  return (
    <div className="content-wrapper profile">
      <div className="info-basic">
        <div className="avt">
          <img src={profileData.avt} alt="avt" />
        </div>
        <div className="info-basic-right">
          <div className="top">
            <p className="username">{profileData.username}</p>
            <Button
              className={"bg-gray"}
              children={"Chỉnh sửa trang cá nhân"}
            />
            <Button className={"bg-gray"} children={"Xem kho lưu trữ"} />
            <SettingsIconBlack />
          </div>
          <div className="midle">
            <p className="post-quantity">
              <span className="quantity">{profileData.post.length} </span> bài
              viết
            </p>
            <p className="follower-quantity">
              <span className="quantity">{profileData.follower} </span> người
              theo dõi
            </p>
            <p className="following-quantity">
              Đang theo dõi{" "}
              <span className="quantity"> {profileData.following} </span> người
              dùng
            </p>
          </div>
          <div className="bottom">
            <p className="fullname">{profileData.fullname}</p>
            <p className="caption">{profileData.caption}</p>
          </div>
        </div>
      </div>
      <div className="collections">
        {profileData.collections.map((item, index) => {
          return (
            <div className="collection-item-wrapper" key={index}>
              <div className="collection-item">
                <div className="collection-img">
                  <img src={profileData.avt} alt="img-collection" />
                </div>
                <div className="collection-name">
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="collection-item-wrapper">
          <div className="collection-item">
            <div className="collection-img add-new">
              <div className="icon-wrapper">
                <PlusIcon />
              </div>
            </div>
            <div className="collection-name">
              <p>Mới</p>
            </div>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="post-types">
          <div className="type-wrapper">
            <p
              className={
                isActiveType === "post"
                  ? "type-name post-type active"
                  : "type-name post-type"
              }
              onClick={() => {
                setIsActiveType("post");
              }}
            >
              {isActiveType === "post" ? <PostIconBlack /> : <PostIcon />}
              Bài viết
            </p>
          </div>
          <div className="type-wrapper">
            <p
              className={
                isActiveType === "save"
                  ? "type-name save-type active"
                  : "type-name save-type"
              }
              onClick={() => {
                setIsActiveType("save");
              }}
            >
              {isActiveType === "save" ? <SaveIconActive /> : <SaveIcon />}
              Đã lưu
            </p>
          </div>
          <div className="type-wrapper">
            <p
              className={
                isActiveType === "taged"
                  ? "type-name taged-type active"
                  : "type-name taged-type"
              }
              onClick={() => {
                setIsActiveType("taged");
              }}
            >
              {isActiveType === "taged" ? <TagedIconBlack /> : <TagedIcon />}
              Được gắn thẻ
            </p>
          </div>
        </div>
        <div className="main-content">
          {isActiveType === "post" && (
            <div className="post-list">
              {profileData.post.map((item, index) => {
                return (
                  <div className="post-item" key={index}>
                    {item.images.slice(0, 1).map((it, index) => {
                      return (
                        <img src={it.src} alt="img-post-item" key={index} />
                      );
                    })}
                    {item.images && item.images.length > 1 && (
                      <span className="icon-wrapper">
                        <ItemsIcon />
                      </span>
                    )}
                    <div className="reaction">
                      {item.likes && item.likes > 0 && (
                        <span className="like">
                          <span className="like-icon"></span> {item.likes}
                        </span>
                      )}
                      {item.comments && item.comments.length > 0 && (
                        <span className="comments">
                          <span className="comment-icon"></span>{" "}
                          {item.comments.length}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {isActiveType === "save" && (
            <div className="save-list">
              <div className="top">
                <p className="onlyMe">
                  Chỉ mình bạn có thể xem mục mình đã lưu
                </p>
                <p className="add-new">+ Bộ sưu tập mới</p>
              </div>
              <div className="body">
                {profileData.saveList.map((item, index) => {
                  return (
                    <div className="save-list-item" key={index}>
                      {item.list.length >= 4
                        ? item.list.slice(0, 4).map((item) => {
                            const id = item;
                            const post = profileData.post.find(
                              (post) => post.id === id
                            );
                            const img = post.images[0].src;
                            return (
                              <div className="img-save-list-item">
                                <img
                                  src={img}
                                  alt="img-save-list-item"
                                  width={"148px"}
                                  height={"148px"}
                                />
                              </div>
                            );
                          })
                        : item.list.slice(0, 1).map((item) => {
                            const id = item;
                            const post = profileData.post.find(
                              (post) => post.id === id
                            );
                            const img = post.images[0].src;
                            return (
                              <div className="img-save-list-item">
                                <img
                                  src={img}
                                  alt="img-save-list-item"
                                  width={"300px"}
                                  height={"300px"}
                                />
                              </div>
                            );
                          })}
                      <div className="title-wrapper">
                        <p className="title-save-list">{item.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isActiveType === "taged" && (
            <div
              className={
                profileData.tagedList.length >= 1
                  ? "taged-list"
                  : "taged-list content-center"
              }
            >
              {profileData.tagedList.length >= 1 ? (
                profileData.tagedList.map((item, index) => {
                  const id = item;
                  const post = profileData.post.find((post) => post.id === id);
                  const img = post.images[0].src;
                  return (
                    <div className="post-item" key={index}>
                      <img src={img} alt="img-post-item" />
                      {post.images && post.images.length > 1 && (
                        <span className="icon-wrapper">
                          <ItemsIcon />
                        </span>
                      )}
                      <div className="reaction">
                        {post.likes && post.likes > 0 && (
                          <span className="like">
                            <span className="like-icon"></span> {post.likes}
                          </span>
                        )}
                        {post.comments && post.comments.length > 0 && (
                          <span className="comments">
                            <span className="comment-icon"></span>{" "}
                            {post.comments.length}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty-content">
                  <div className="icon"></div>
                  <div className="empty-title">
                    <h1>Ảnh có mặt bạn</h1>
                    <p>
                      Khi mọi người gắn thẻ bạn trong ảnh, ảnh sẽ xuất hiện ở
                      đây.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
