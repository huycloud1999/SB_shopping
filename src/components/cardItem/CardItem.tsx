import React from "react";
import styles from "./cardItem.module.scss";
import Link from "next/link";
import img from "@/assets/imgs/products/1.jpg";
import Image from "next/image";
const CardItem: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/product/1">
        <Image src={img} alt="product1" />
        <p>Little Armchair Sheepskin</p>
        <p>200$</p>
      </Link>
    </div>
  );
};

export default CardItem;
