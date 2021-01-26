import React from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [showInputError, setShowInputError] = React.useState(false);

  const loginHandler = () => {
    let counter = 0;
    emailInput === "arizhik@striveschool.com" && counter++;
    passwordInput === "password123" && counter++;
    counter === 2 ? loginSuccessHandler() : setShowInputError(true);
  };

  const loginSuccessHandler = () => {
    window.location.replace("/feed");
  };

  return (
    <div id="login-main-container" className="d-flex flex-column justify-content-center align-items-center">
      <div>
        <div className="login-top-container d-flex align-items-center justify-content-start">
          <div className="login-title d-flex mb-3">
            <h4>Linked</h4>
            <i className="fab fa-linkedin ml-1"></i>
          </div>
        </div>
        <div className="login-content-container mb-5">
          <div className="mb-4">
            <h2 className="mb-1">Sign in</h2>
            <p className="mb-0">Stay updated on your professional world</p>
            {showInputError && <small className="text-danger">Incorrect Email/password, please try again.</small>}
          </div>
          <div class="d-flex flex-column">
            <div className="login-input-wrap mb-4">
              <p className="login-label mb-0">Email or Phone</p>
              <input type="email" onChange={(event) => setEmailInput(event.target.value)} value={emailInput}></input>
            </div>
            <div className="login-input-wrap mb-2">
              <p className="login-label mb-0">Password</p>
              <input
                type="password"
                onChange={(event) => setPasswordInput(event.target.value)}
                value={passwordInput}
              ></input>
            </div>
            <Link className="forgot-password mb-4" to="/login/forgotpassword">
              Forgot Password?
            </Link>
            <button className="sign-in-btn" onClick={loginHandler}>
              Sign in
            </button>
          </div>
        </div>
        <div className="text-center">
          <p>
            New to LinkedIn?{" "}
            <Link to="/register" className="font-weight-bold">
              Join now
            </Link>
          </p>
          <small className="grey-text">This is a dummy login page/project, please don't sue us.</small>
        </div>
      </div>
    </div>
  );
}

export default Login;
