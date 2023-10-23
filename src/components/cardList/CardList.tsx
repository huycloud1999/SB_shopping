import React from "react";
import styles from "./cardList.module.scss";
import CardItem from "../cardItem/CardItem";
const CardList = () => {
  return (
    <div className={styles["container"]}>
      <h1>Products we are proud of</h1>
      <div className={styles["listItem"]}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default CardList;
