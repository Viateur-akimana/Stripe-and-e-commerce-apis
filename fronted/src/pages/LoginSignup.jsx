import React from "react";
import "./css/loginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login">
          Already have an account <span>Login</span>
        </p>
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
