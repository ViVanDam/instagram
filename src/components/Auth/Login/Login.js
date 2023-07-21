import TopAuthWrapper from "../TopAuthWrapper";
import MidAuthWrapper from "../MidAuthWrapper/MidAuthWrapper";
import BottomAuthWrapper from "../BottomAuthWrapper/BottomAuthWrapper";
import Footer from "../../Footer/Footer";
import "./Login.scss";

function Login() {
  return (
    <div className="login-wrapper">
      <TopAuthWrapper type="login" />
      <MidAuthWrapper />
      <BottomAuthWrapper />
      <Footer />
    </div>
  );
}

export default Login;
