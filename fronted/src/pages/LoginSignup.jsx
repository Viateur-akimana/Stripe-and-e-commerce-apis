import React, { useState } from "react";
import "./css/loginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("sign up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    let responseData;
    await fetch("http://localhost:3000/signUp", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("Auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
      try {
        let responseData;
        const response = await fetch("http://localhost:3000/signUp", {
          method: "POST",
          headers: {
            Accept: 'application/form-data',
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
    
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
    
        responseData = await response.json();
    
        if (responseData.success) {
          localStorage.setItem('Auth-token', responseData.token);
          window.location.replace("/");
        }
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    };
    


  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>{state}</h1>
        <div className="loginSignUp-fields">
          {state === "sign up" ? (
            <input
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your name"
            />
          ) : null}
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={state === "Login" ? Login : signUp}>Continue</button>
        {state === "sign up" ? (
          <p className="login">
            Already have an account{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="login">
            Create an account{" "}
            <span onClick={() => setState("sign up")}>Sign up here</span>
          </p>
        )}

        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, I agree to the terms and privacy policy of this
            e-shop app
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
