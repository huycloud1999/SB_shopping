"use client";
import React from "react";
import styles from "./signup.module.scss";
import gg from "@/assets/imgs/socials/google-logo-9808.png";
import fb from "@/assets/imgs/socials/fb.png";
import Image from "next/image";
import Link from "next/link";

const SignUp: React.FC = () => {
  const text: String = "Have an account?";
  return (
    <div className={styles["signUp-container"]}>
      <h1>Get Started Now</h1>
      <div className={styles.form}>
        <div className={styles["input"]}>
          <span>Email</span>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className={styles["input"]}>
          <span>Password</span>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className={styles["input"]}>
          <span>Confirm password</span>
          <input type="password" placeholder="Confirm password" />
        </div>
      </div>
      <div className={styles["checkbox"]}>
        <input type="checkbox" />
        <label htmlFor="">
          I agree to the <span>terms & policy</span>
        </label>
      </div>
      <button className={styles.btnSignUp}>Sign Up</button>
      <div className={styles["or"]}>
        <div className={styles["line"]}></div>
        <p>Or</p>
        <div className={styles["line"]}></div>
      </div>
      <div className={styles["ggfb"]}>
        <button>
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
          <Link href="/login">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
