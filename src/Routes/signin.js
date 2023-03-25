import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signin.css";
function Signin() {
  const [detail, setDetail] = useState({ Email: "", Password: "" });
  const navigate = useNavigate();
  function signIn(e) {
    e.preventDefault();
    if (!detail.Email || !detail.Password) {
      alert("All Fields are mandatory");
    } else {
      setTimeout(() => {
        alert("Login Successfull");
        navigate("/addnotes");
      }, 500);
    }
  }
  function onRegister() {
    navigate("/register");
  }
  return (
    <div className={"signin"}>
      <h1>Login Page</h1>
      
      <form>
        <lable for="email"> Email</lable>
        <input
          placeholder="Email"
          type={"email"}
          onChange={(e) => {
            setDetail({ ...detail, Email: e.target.value });
          }}
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setDetail({ ...detail, Password: e.target.value });
          }}
        />
          <div>
        <span>
          <button
            className="signin_btn"
            onClick={(e) => {
              signIn(e);
            }}
          >
            Login
          </button>
        </span>
        </div>
        <div>
        <span>
          <button
            className="register_btn"
            onClick={(e) => {
              onRegister();
            }}
          >
             Register 
          </button>
        </span>
        </div>
      </form>
    </div>
  );
}

export default Signin;
