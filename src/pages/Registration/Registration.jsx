import React from "react";
import "./Registration.css";
import { Link, useHistory } from "react-router-dom";
import { postFunction } from "../../components/CRUDFunctions";

function Registration() {
  const [nameInput, setNameInput] = React.useState("");
  const [surnameInput, setSurnameInput] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [usernameInput, setUsernameInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [showInputError, setShowInputError] = React.useState(false);

  const signUpHandler = async () => {
    const user = {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      username: usernameInput,
      password: passwordInput,
    };
    const token = await postFunction("profile/", user);
    token.token ? loginSuccessHandler(token.token) : setShowInputError(true);
  };

  const loginSuccessHandler = (token) => {
    localStorage.setItem("token", token);
    window.location.replace("/feed");
  };

  return (
    <div
      id="login-main-container"
      className="d-flex flex-column justify-content-center align-items-center bg"
    >
      <div>
        <div className="login-top-container d-flex align-items-center justify-content-start">
          <div className="login-title d-flex mb-3 mt-5 text-white">
            <h4>Linked</h4>
            <i className="fab fa-linkedin ml-1"></i>
          </div>
        </div>
        <div className="login-content-container mb-5">
          <div className="mb-4">
            <h2 className="mb-1">Be great at what you do</h2>
            <p className="mb-0 text-center">Get started - it's free</p>
            {showInputError && (
              <small className="text-danger">Insert valid informations</small>
            )}

            {showInputError && !nameInput ? (
              <span>
                <small className="text-danger">
                  <br />
                  Please insert a name
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !surnameInput ? (
              <span>
                <small className="text-danger">
                  <br />
                  Please insert a surname
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !emailInput ? (
              <span>
                <small className="text-danger">
                  <br />
                  Please insert a valid email
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !usernameInput ? (
              <span>
                <small className="text-danger">
                  <br />
                  Please insert a username
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !passwordInput ? (
              <span>
                <small className="text-danger">
                  <br />A password it's required
                </small>
              </span>
            ) : (
              ""
            )}
          </div>
          <div class="d-flex flex-column">
            <div className="login-input-wrap mb-4">
              <p className="login-label mb-0">Name</p>
              <input
                type="string"
                onChange={(event) => setNameInput(event.target.value)}
                value={nameInput}
              ></input>
            </div>
            <div className="login-input-wrap mb-4">
              <p className="login-label mb-0">Surname</p>
              <input
                type="string"
                onChange={(event) => setSurnameInput(event.target.value)}
                value={surnameInput}
              ></input>
            </div>
            <div className="login-input-wrap mb-4">
              <p className="login-label mb-0">Email</p>
              <input
                type="string"
                onChange={(event) => setEmailInput(event.target.value)}
                value={emailInput}
              ></input>
            </div>
            <div className="login-input-wrap mb-4">
              <p className="login-label mb-0">Username</p>
              <input
                type="string"
                onChange={(event) => setUsernameInput(event.target.value)}
                value={usernameInput}
              ></input>
            </div>
            <div className="login-input-wrap mb-2">
              <p className="login-label mb-0">Password</p>
              <input
                type="password"
                onChange={(event) => setPasswordInput(event.target.value)}
                value={passwordInput}
              ></input>
            </div>
            <button className="sign-in-btn" onClick={signUpHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
