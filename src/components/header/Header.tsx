"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import facebook from "@/assets/imgs/socials/fb.png";
import instagram from "@/assets/imgs/socials/pngwing.com.png";
import github from "@/assets/imgs/socials/git.png";
import linkedin from "@/assets/imgs/socials/linkedin.png";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLink from "../authLink/AuthLink";
import ShoppingCart from "../shopingCart/ShoppingCart";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenuClick = (menu: any) => {
    setActiveMenu(menu);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["socials"]}>
        <Image src={facebook} alt="facebook" width={24} height={24} />
        <Image src={instagram} alt="instagram" width={24} height={24} />
        <Image src={github} alt="github" width={24} height={24} />
        <Image src={linkedin} alt="linkedin" width={24} height={24} />
      </div>
      <div className={styles["logo"]}>SieuBuong.</div>
      <div className={styles["links"]}>
        <ThemeToggle />
        <Link
          href="/"
          className={activeMenu === "Home" ? styles["active"] : styles["link"]}
          onClick={() => handleMenuClick("Home")}
        >
          Home
        </Link>
        <Link
          href="/"
          className={
            activeMenu === "Categories" ? styles["active"] : styles["link"]
          }
          onClick={() => handleMenuClick("Categories")}
        >
          Categories
        </Link>
        <Link
          href="/"
          className={
            activeMenu === "Contact" ? styles["active"] : styles["link"]
          }
          onClick={() => handleMenuClick("Contact")}
        >
          Contact
        </Link>
        <Link
          href="/"
          className={activeMenu === "About" ? styles["active"] : styles["link"]}
          onClick={() => handleMenuClick("About")}
        >
          About
        </Link>
        <ShoppingCart />
        <AuthLink />
      </div>
    </div>
  );
};

export default Header;
