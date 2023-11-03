"use client";
import React from "react";
import styles from "./login.module.scss";
import gg from "@/assets/imgs/socials/google-logo-9808.png";
import fb from "@/assets/imgs/socials/fb.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getTokenLogin } from "@/store/reducers/auth/sign-in/withGoogle";
const SignIn: React.FC = () => {
  const text: String = "Don't have an account?";

  const dispatch = useDispatch();
  const handleSiginIN = () => {
    window.location.href = "http://localhost:8000/api/v1/auth/google";
    dispatch(getTokenLogin());
  };
  return (
    <div className={styles["login-container"]}>
      <div className={styles["text"]}>
        <h1>Welcome back!</h1>
        <p>Enter your Credentials to access your account</p>
      </div>
      <div className={styles["form"]}>
        <span>Email address</span>
        <input type="text" name="" id="" placeholder="Enter your email" />
        <div className={styles["span-password"]}>
          <span>Password</span>
          <span>forgot password</span>
        </div>
        <input type="password" placeholder="Enter your password" />
        <div className={styles["rememberMe"]}>
          <input type="checkbox" />
          <label htmlFor="">Remember me</label>
        </div>
        <button className={styles["btnLogin"]}>Login</button>
        <div className={styles["or"]}>
          <div className={styles["line"]}></div>
          <p>Or</p>
          <div className={styles["line"]}></div>
        </div>
        <div className={styles["ggfb"]}>
          <button onClick={handleSiginIN}>
            <Image src={gg} alt="gg" width={24} height={24} />
            <span>Sign in with Google</span>
          </button>
          <button>
            <Image src={fb} alt="fb" width={24} height={24} />
            <span>Sign in with Facebook</span>
          </button>
        </div>
        <div className={styles["link"]}>
          <span>
            {text}
            <Link href="/signUp">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
