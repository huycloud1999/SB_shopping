"use client";
import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";
import img from "@/assets/imgs/banner/banner1.jpg";
import Link from "next/link";
const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles["banner-container"]}>
        <div className={styles["textSide"]}>
          <div className="text">
            <h2>Creative harmonious living</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              cumque sapiente numquam dolorem blanditiis.
            </p>
            <Link href="/">
              <button onClick={() => window.scrollTo(0, 0)}>Shop now</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageSide}>
          <Image src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
