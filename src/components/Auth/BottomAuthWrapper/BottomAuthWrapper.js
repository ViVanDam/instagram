import "./BottomAuthWrapper.scss";
import chPlay from "../../../assets/authPage/gg-play.png";
import microsoft from "../../../assets/authPage/microsoft.png";

function BottomAuthWrapper({ children }) {
  return (
    <div className="auth-bottom">
      <p>Get the app.</p>
      <div className="app-stores">
        <img src={chPlay} alt="chplay" />
        <img src={microsoft} alt="microsoft" />
      </div>
    </div>
  );
}

export default BottomAuthWrapper;
