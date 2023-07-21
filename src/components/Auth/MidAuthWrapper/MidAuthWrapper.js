import "./MidAuthWrapper.scss";
import { Link } from "react-router-dom";

function MidAuthWrapper({ account }) {
  return (
    <div className="auth-mid">
      <span className="text">
        {account ? "Have an account?" : "Don't have an account?"}
      </span>
      <Link className="link" to={account ? "/login" : "/signin"}>
        {account ? "Login" : "Signin"}
      </Link>
    </div>
  );
}

export default MidAuthWrapper;
