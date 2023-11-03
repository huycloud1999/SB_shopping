import React from "react";
import styles from "./featured.module.scss";
import img from "@/assets/imgs/featured/home-img-1.jpg";
import img2 from "@/assets/imgs/featured/home-img-2.jpg";
import img3 from "@/assets/imgs/featured/home-img-3.jpg";
import img4 from "@/assets/imgs/featured/home-img-4.jpg";
import Image from "next/image";
import Link from "next/link";
const Featured: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-one"]}>
          <Link href="/categories">
            <div className={styles["lil-overlay"]}></div>
            <Image src={img} alt="featured" priority />
            <p>Live Comfortably</p>
          </Link>
        </div>
        <div className={styles["grid-two"]}>
          <Link href="/categories">
            <div className={styles["lil-overlay"]}></div>
            <Image src={img2} alt="featured" />
            <p>Skincare</p>
          </Link>
        </div>
        <div className={styles["grid-threeUp"]}>
          <Link href="/categories">
            <div className={styles["lil-overlay"]}></div>
            <Image src={img3} alt="featured" />
            <p>Kitchen</p>
          </Link>
        </div>
        <div className={styles["grid-threeLow"]}>
          <Link href="/categories">
            <div className={styles["lil-overlay"]}></div>
            <Image src={img4} alt="featured" />
            <p>Electronics</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
