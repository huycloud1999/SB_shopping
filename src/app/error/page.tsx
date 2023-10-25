import React from "react";
import Image from "next/image";
import styles from "@/app/styles/404.module.scss";
import Link from "next/link";
import err from "@/assets/imgs/socials/something-went-wrong-2511607-2133695.png";
const ErrorPgae = () => {
  return (
    <div className={styles["errContainer"]}>
      <Image src={err} alt="Something went wrong" />
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default ErrorPgae;
