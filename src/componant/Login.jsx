import React from "react";
import { useState } from "react";
import validator from "validator";


export default function Login() {  

  const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let [email, username, password] = ["", "", ""];
  const [emailError, setEmailError] = useState("");
  const [userError , setusererror] = useState("");
  const [passworserror , setpassworderror] = useState("");
  let emailChange = (e) => {
    email = e.target.value;
    if (!email.match(emailRegex)){ 
      e.target.style = "border-color:red";
      setEmailError("please inter valid email");
  } else {
    e.target.style = "border-color:#d8e2dc"; 
   setEmailError("");
  }
  };
  let usernameChange = (e) => {
    console.log(e.target.value);
    username = e.target.value;
    if (username.length < 3) {e.target.style = "border-color:red"; 
    setusererror("please inter valid name"); 
  }
    else {e.target.style = "border-color:#d8e2dc"; 
    setusererror("");
  } 
  };
  let passwordChange = (e) => {
    password = e.target.value;
    if (password.length < 6) {
      e.target.style = "border-color:red";
      setpassworderror("please inter at least 6 charcters")
    } else {  e.target.style = "border-color:#d8e2d ";
  setpassworderror("");
  }
  };
  let Valid = () => {
    console.log(
      "username:" + username + " password: " + password + " Email : " + email 
    ); 
    if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid Email!");
      setusererror("please inter valid name");
      setpassworderror("please inter at least 6 charcters")
    } else {  setEmailError(""); 
  setpassworderror("");
  setusererror("");
  }
  };
  return (
    <div
      className="col-4"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        borderColor: "red",
        borderWidth: "12px",
        backgroundColor: "#d8e2dc",
        padding: "50px",
        borderRadius: "20px",
      }}
    >
      <h3 style={{ color: "#6b705c" }}>Sign In</h3>
      <div className="form-group" style={{ textAlign: "left" }}>
        <label>User Name</label>
        <input
          type="username"
          className="form-control "
          placeholder="Enter User Name"
          onChange={(e) => {
            usernameChange(e);
          }}
        /> 
        <p>
          <span style={{ color: "red" }}> {userError}</span>
        </p>
      </div> 
      <div className="form-group" style={{ textAlign: "left", margin: "3px" }}>
        <label>Email</label>

        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => {
            emailChange(e);
          }}
        />
        <p>
          <span style={{ color: "red" }}> {emailError}</span>
        </p>
      </div>
      <div className="form-group" style={{ textAlign: "left" }}>
        <label>Password</label>

        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            passwordChange(e);
          }}
        />
         <p>
          <span style={{ color: "red" }}> {passworserror}</span>
        </p>
      </div>

      <button
        className="btn btn-primary btn-block"
        style={{
          margin: "30px",
          boxSizing: "content-box",
          width: "80px",
          borderRadius: "30px",
          backgroundColor: "#6b705c",
          borderColor: "#6b705c",
        }}
        onClick={Valid}
      >
        Submit
      </button>
      <p className="forgot-password text-right"></p>
    </div>
  );
}