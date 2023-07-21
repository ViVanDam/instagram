import "./TopAuthWrapper.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";

function TopAuthWrapper({ type }) {
  const [usernameVal, setUsernameVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [mobileVal, setMobileVal] = useState("");
  const [fullnameVal, setFullnameVal] = useState("");
  const [usernameSigninVal, setUsernameSigninVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

  const handleUsernameInput = (event) => {
    setUsernameVal(event.target.value);
    console.log(usernameVal);
  };

  const handlePassInput = (event) => {
    setPassVal(event.target.value);
  };

  const handleMoblieInput = (event) => {
    setMobileVal(event.target.value);
  };

  const handleFullnameInput = (event) => {
    setFullnameVal(event.target.value);
  };

  const handleUsernameSigninInput = (event) => {
    setUsernameSigninVal(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPasswordVal(event.target.value);
  };

  return (
    <div className="auth-top">
      <div className="logo"></div>

      {type === "signin" && (
        <>
          <div className="slogan">
            Signin to see photos and videos from your friends
          </div>
          <Button>
            <div className="wfb-wrapper signin-wfb">
              <span className="logo-fb"></span>
              <span className="wfb">Log in with Facebook</span>
            </div>
          </Button>
          <div className="or-wrapper">
            <div></div>
            <div className="or-text">OR</div>
            <div></div>
          </div>
        </>
      )}
      <form>
        {type === "login" ? (
          <>
            <Input
              placeholder={"Mobile Number or Email"}
              type={"text"}
              state={{ value: usernameVal, setUsernameVal }}
              onChange={handleUsernameInput}
            />
            <Input
              placeholder={"Password"}
              type={"password"}
              state={{ value: passVal, setPassVal }}
              onChange={handlePassInput}
            />
          </>
        ) : (
          <>
            <Input
              placeholder={"Phone number, username or email"}
              type={"text"}
              state={{ value: mobileVal, setMobileVal }}
              onChange={handleMoblieInput}
            />
            <Input
              placeholder={"Fullname"}
              type={"text"}
              state={{ value: fullnameVal, setFullnameVal }}
              onChange={handleFullnameInput}
            />
            <Input
              placeholder={"Username"}
              type={"text"}
              state={{ value: usernameSigninVal, setUsernameSigninVal }}
              onChange={handleUsernameSigninInput}
            />
            <Input
              placeholder={"Password"}
              type={"password"}
              state={{ value: passwordVal, setPasswordVal }}
              onChange={handlePasswordInput}
            />
          </>
        )}
        {type === "login" ? (
          <Button
            className={passVal && usernameVal ? "active" : "disabled"}
            disabled={passVal && usernameVal ? false : true}
          >
            Login
          </Button>
        ) : (
          <>
            <div className="uploaded-text">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <span className="learn-more">Learn More</span>
              </p>
            </div>
            <div className="agree">
              <p>
                By signing up, you agree to our <span>Terms</span> ,{" "}
                <span>Privacy Policy</span> and <span>Cookies Policy</span>
              </p>
            </div>
            <Button
              className={
                mobileVal && fullnameVal && usernameSigninVal && passwordVal
                  ? "active"
                  : "disabled"
              }
              disabled={
                mobileVal && fullnameVal && usernameSigninVal && passwordVal
                  ? false
                  : true
              }
            >
              Signin
            </Button>
          </>
        )}
      </form>
      {type === "login" && (
        <>
          <div className="or-wrapper">
            <div></div>
            <div className="or-text">OR</div>
            <div></div>
          </div>
          <div className="wfb-wrapper">
            <span className="logo-fb"></span>
            <span className="wfb">Log in with Facebook</span>
          </div>
          <div className="fogot-wrapper">
            <span className="fogot">Fogot password? </span>
          </div>
        </>
      )}
    </div>
  );
}

export default TopAuthWrapper;
