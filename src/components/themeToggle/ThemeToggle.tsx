"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.scss";
import sun from "@/assets/imgs/logo/sun.png";
import moon from "@/assets/imgs/logo/moon.png";
import Image from "next/image";
import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const contextValue = useContext<ThemeContextProps | undefined>(ThemeContext);
  if (!contextValue) {
    return;
  }

  const { toggle, theme } = contextValue;

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={moon} alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={sun} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
