"use client";
import React, { useState } from "react";
import styles from "./authLink.module.scss";
import Link from "next/link";
import avt from "@/assets/imgs/logo/avatar.jpeg";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
const AuthLink: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const status = "notauthenticated";
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Image
            src={avt}
            alt="avatar"
            width={25}
            height={25}
            className={styles.img}
          />
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <AiOutlineClose className={styles.close} onClick={handleClose} />
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/categories">Categories</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/profile">UserName</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
