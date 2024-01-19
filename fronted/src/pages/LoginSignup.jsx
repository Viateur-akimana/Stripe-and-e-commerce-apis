import React from "react";
import "./css/loginSignup.css";
import { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("sign up");
  const Login = () => {};
  const signUp = () => {};
  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>{state}</h1>
        <div className="loginSignUp-fields">
          {state === "sign up" ? (
            <input type="text" placeholder="Your name" />
          ) : null}
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button onClick={state === "Login" ? Login() : signUp()}>
          Continue
        </button>
        {state === "sign up" ? (
          <p className="login">
            Already have an account{" "}
            <span onClick={setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="login">
            Create an account{" "}
            <span onClick={setState("sign up")}>Sign up here</span>
          </p>
        )}

        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, I agree to terms and privacy policy of this e-shop
            app
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
