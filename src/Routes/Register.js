import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [detail, setDetail] = useState({
    Name: "",
    Phone_Number: "",
    Email: "",
    Password: "",
    cPassword: "",
  });
  const navigate = useNavigate();
  function signIn() {
    navigate("/");
  }
  function onRegister(e) {
    e.preventDefault();
    if (detail.Password.length < 6) {
      alert("Pasword must contain minimum 6 characters");
    } else if (
      !detail.Email ||
      !detail.Password ||
      !detail.cPassword ||
      !detail.Name ||
      !detail.Phone_Number
    ) {
      alert("All Fields are mandatory");
    } else if (detail.cPassword !== detail.Password) {
      alert("Password didnt matched");
    } else {
      setTimeout(() => {
        alert("Registration Successfull, Now You Can Login");
        navigate("/");
      }, 500);
    }
  }
  return (
    <div className={"reg_main_container"}>
      <h1>Registration Page</h1>
     
      <form>
        <input
          placeholder="Name"
          onChange={(e) => {
            setDetail({ ...detail, Name: e.target.value });
          }}
        />
        <input
          placeholder="Phone"
          onChange={(e) => {
            setDetail({ ...detail, Phone_Number: e.target.value });
          }}
        />
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
        <input
          placeholder="Confirm Password"
          onChange={(e) => {
            setDetail({ ...detail, cPassword: e.target.value });
          }}
        />
<div>
        <button
          className="register_btn"
          onClick={(e) => {
            onRegister(e);
          }}
        >
          Register
        </button>
        </div>
      </form>
      <button
        className="signin_btn"
        onClick={() => {
          signIn();
        }}
      >
        Login 
      </button>
      
    </div>
  );
}

export default Register;
