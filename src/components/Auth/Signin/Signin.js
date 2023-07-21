import "./Signin.scss";
import TopAuthWrapper from "../TopAuthWrapper/TopAuthWrapper";
import MidAuthWrapper from "../MidAuthWrapper/MidAuthWrapper";
import BottomAuthWrapper from "../BottomAuthWrapper/BottomAuthWrapper";
import Footer from "../../Footer/Footer";

function Signin() {
  return (
    <div className="signin-wrapper">
      <TopAuthWrapper type="signin" />
      <MidAuthWrapper account />
      <BottomAuthWrapper />
      <Footer />
    </div>
  );
}

export default Signin;
