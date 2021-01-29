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
  const [errMSg, setErrorMsg] = React.useState("");

  const signUpHandler = async () => {
    const user = {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      username: usernameInput,
      password: passwordInput,
    };
    const newUser = await postFunction("profile/", user);
    if (newUser._id) {
      const token = await postFunction("profile/login", {
        user: newUser.username,
        password: newUser.password,
      });
      token.token ? signupSuccessHandler(token.token) : setShowInputError(true);
    } else {
      if (newUser.includes("email")) {
        setErrorMsg("Email Already Used");
      } else if (newUser.includes("user")) {
        setErrorMsg("Please choose another Username");
      }
      setShowInputError(true);
    }
  };

  const signupSuccessHandler = (token) => {
    localStorage.setItem("token", token);
    window.location.replace("/feed");
  };

  return (
    <div id='signup-main-container' className='d-flex flex-column justify-content-center align-items-center bg'>
      <div>
        <div className='signup-top-container d-flex align-items-center justify-content-start'>
          <div className='signup-title d-flex pt-5 '>
            <h4>Linked</h4>
            <i className='fab fa-linkedin ml-1'></i>
          </div>
        </div>
        <div className='signup-content-container mb-5'>
          <div className='mb-4'>
            <h2 className='mb-1 text-center'>Make the most of your professional life</h2>
            <p className='mb-5 text-center'>Get started - it's free</p>
            {showInputError && <small className='text-danger'>{errMSg ? errMSg : "Please insert valid information"}</small>}

            {showInputError && !nameInput ? (
              <span>
                <small className='text-danger'>
                  <br />
                  Please insert a name
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !surnameInput ? (
              <span>
                <small className='text-danger'>
                  <br />
                  Please insert a surname
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !emailInput ? (
              <span>
                <small className='text-danger'>
                  <br />
                  Please insert a valid email
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !usernameInput ? (
              <span>
                <small className='text-danger'>
                  <br />
                  Please insert a username
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && !passwordInput ? (
              <span>
                <small className='text-danger'>
                  <br />A password it's required
                </small>
              </span>
            ) : (
              ""
            )}
            {showInputError && passwordInput.length < 6 ? (
              <span>
                <small className='text-danger'>
                  <br />
                  The password it's too short
                </small>
              </span>
            ) : (
              ""
            )}
          </div>
          <div class='d-flex flex-column'>
            <div className='signup-input-wrap mb-4'>
              <p className='signup-label mb-0'>Name</p>
              <input type='string' onChange={(event) => setNameInput(event.target.value)} value={nameInput}></input>
            </div>
            <div className='signup-input-wrap mb-4'>
              <p className='signup-label mb-0'>Surname</p>
              <input type='string' onChange={(event) => setSurnameInput(event.target.value)} value={surnameInput}></input>
            </div>
            <div className='signup-input-wrap mb-4'>
              <p className='signup-label mb-0'>Email</p>
              <input type='string' onChange={(event) => setEmailInput(event.target.value)} value={emailInput}></input>
            </div>
            <div className='signup-input-wrap mb-4'>
              <p className='signup-label mb-0'>Username</p>
              <input type='string' onChange={(event) => setUsernameInput(event.target.value)} value={usernameInput}></input>
            </div>
            <div className='signup-input-wrap mb-2'>
              <p className='signup-label mb-0'>Password</p>
              <input type='password' onChange={(event) => setPasswordInput(event.target.value)} value={passwordInput}></input>
            </div>
            <small className='grey-text mt-2 mb-2'>
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <Link to='/signup' className='font-weight-bold ml-1'>
                User Agreement, Privacy Policy
              </Link>{" "}
              , and
              <Link to='/signup' className='font-weight-bold ml-1'>
                Cookie <br />
                <div className='text-center'>Policy.</div>
              </Link>{" "}
            </small>
            <button className='sign-in-btn' onClick={signUpHandler}>
              Agree & Join
            </button>
            <button className='google-btn mt-3 ' onClick={signUpHandler}>
              <img className='google-icon mr-2 mb-1' src='https://img.icons8.com/fluent/48/000000/google-logo.png' />
              Join with Google
            </button>
            <div className='text-center mt-3'>
              Already on Linkedin?
              <Link to='/' className='font-weight-bold ml-1'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
