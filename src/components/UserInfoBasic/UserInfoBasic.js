import "./UserInfoBasic.scss";
import { BlueTickIcon } from "../Icons";

function UserInfoBasic({
  avt,
  username,
  fullname = "",
  location = "",
  blueTick = null,
  following = null,
  time = null,
  direction = "verti",
  size = "56",
  ortherSize = null,
  sound = "",
  extraInfo = "",
  extraFollow = "",
  post = false,
}) {
  const flexDirection = direction === "verti" ? "column" : "row";
  const justifyContent = direction === "verti" ? "center" : "flex-start";
  const userInfoWidth = direction === "verti" ? 66 + "px" : "100%";
  const userInHeight = direction === "verti" ? 84 + "px" : 42 + "px";
  const imgWidth = size === "32" ? 32 + "px" : 56 + "px";
  const imgHeight = size === "32" ? 32 + "px" : 56 + "px";
  const wrapperWidth = size === "32" ? 40 + "px" : 66 + "px";
  const wrapperHeight = size === "32" ? 40 + "px" : 66 + "px";
  const accountWidth = direction === "horiz" ? "fit-content" : 66 + "px";
  const fontSize = direction === "horiz" && 14 + "px";
  const fontWeight = direction === "horiz" && 500;
  const color = direction === "horiz" && "#000";
  const marginLeft = direction === "horiz" && 6 + "px";

  return (
    <div
      className="user-info-item"
      style={{
        flexDirection: flexDirection,
        width: userInfoWidth,
        justifyContent: justifyContent,
        flex: 1,
        height: ortherSize && ortherSize !== null ? ortherSize : userInHeight,
      }}
    >
      <div
        className="avt-wrapper "
        style={{ width: wrapperWidth, height: wrapperHeight }}
      >
        <img
          src={avt}
          alt="avt-img"
          style={{
            width: size === "48" ? "48px" : imgWidth,
            height: size === "48" ? "48px" : imgHeight,
          }}
        />
      </div>
      <div
        className="text-content"
        style={{
          marginLeft: marginLeft,
        }}
      >
        <div className="name-wrapper">
          <div
            className="username-and-time"
            style={{
              width: accountWidth,
            }}
          >
            <p
              className="username"
              style={{
                fontSize: fontSize,
                fontWeight: fontWeight,
                color: color,
              }}
            >
              {username}
            </p>{" "}
            {blueTick && (
              <span className="blue-tick">
                <BlueTickIcon />
              </span>
            )}
            {time && <span className="time"> &bull; {" " + time}</span>}
            {following !== null && (
              <span className="following">
                {" "}
                &bull; {following !== true ? " Theo dõi" : "Đang theo dõi"}
              </span>
            )}
          </div>
          <div className="full-extra-follower">
            {fullname && fullname !== "" && (
              <span className="fullname">{fullname}</span>
            )}
            {extraFollow && extraFollow !== "" && (
              <>
                <span className="bullet"> &bull; </span>
                <span className="extra-info"> {extraFollow}</span>
              </>
            )}
          </div>
        </div>

        <div className="extra-info-wrapper">
          <div className="location-and-sound">
            {location && location !== "" && (
              <div className="location">{location}</div>
            )}

            {location && sound && <span className="bullet"> &bull; </span>}

            {sound && sound !== "" && (
              <div className="sound"> {" " + sound}</div>
            )}
          </div>
          {extraInfo && post === false && extraInfo !== "" && (
            <div className="extra-info"> {extraInfo}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserInfoBasic;
