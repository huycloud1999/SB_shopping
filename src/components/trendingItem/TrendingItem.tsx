"use client";
import React from "react";
import styles from "./trendingItem.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CardItem from "../cardItem/CardItem";
import ItemTrending from "./trendingItem/ItemTrending";
const TrendingItem: React.FC = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };
  return (
    <div className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.titleBtns}>
          <h3>Trending Now</h3>
          <div className={styles.btns}>
            <button title="scroll left" onClick={slideLeft}>
              <SlArrowLeft />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <SlArrowRight />
            </button>
          </div>
        </div>
        <div className={styles["row-container"]} id="slider">
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
          <ItemTrending />
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
