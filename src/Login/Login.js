import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase.js";
import { Footer } from "../Footer/Footer.js";
import Header from "../Header/Header";
import { Logo } from "../Header/Logo.js";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          toast.success("Signed In Successfully!")
          navigate("/");
        }
      })
      .catch((err) => toast.error("Please! Enter Correct login Details"));
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
          toast.success("User Registered Successfully !");
        }
      })
      .catch((err) => toast.error("Please! Fill Data Correctly"));
  };

  return (
    <>
      <Header />
      <div className="login">
        <div className="login_logo">
          <Link style={{ textDecoration: "none" }} to="/">
            <Logo />
          </Link>
        </div>
        <div className="login--container">
          <h2
            style={{
              fontWeight: "800",
              fontSize: "1.5rem",
              marginBottom: "5px",
              textAlign: "center",
            }}
          >
            Sign-In
          </h2>
          <form>
            <h5>Email Id :</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password :</h5>
            <input
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="login--signButton"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice,Our Cookies Notice and Our Interest Based Ad Notes{" "}
          </p>
          <button
            type="submit"
            className="login--registerButton"
            onClick={signUp}
          >
            Create Your Amazon Account
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};
