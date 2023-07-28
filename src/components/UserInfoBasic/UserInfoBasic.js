import "./UserInfoBasic.scss";
import { BlueTickIcon } from "../Icons";

function UserInfoBasic({
  avt,
  username,
  fullname = "",
  location = "",
  blueTick = false,
  time = null,
  direction = "verti",
  size = "56",
  sound = "",
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
  return (
    <div
      className="user-info-item"
      style={{
        flexDirection: flexDirection,
        width: userInfoWidth,
        justifyContent: justifyContent,
        flex: 1,
        height: userInHeight,
      }}
    >
      <div
        className="avt-wrapper "
        style={{ width: wrapperWidth, height: wrapperHeight }}
      >
        <img
          src={avt}
          alt="avt-img"
          style={{ width: imgWidth, height: imgHeight }}
        />
      </div>
      <div className="text-content">
        <div className="account-name" style={{ width: accountWidth }}>
          {username}{" "}
          {blueTick && (
            <span className="blue-tick">
              <BlueTickIcon />
            </span>
          )}
          {time && <span className="time"> &bull; {" " + time}</span>}
        </div>

        <div className="sound-and-location">
          {location && location !== "" && (
            <div className="location">{location}</div>
          )}
          {sound && sound !== "" && <div className="sound"> {" " + sound}</div>}

          {fullname && fullname !== "" && (
            <div className="fullname">{fullname}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserInfoBasic;
