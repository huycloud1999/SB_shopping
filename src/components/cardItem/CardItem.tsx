"use client";
import React from "react";
import styles from "./cardItem.module.scss";
import Link from "next/link";
import img from "@/assets/imgs/products/1.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const CardItem: React.FC = () => {
  const router = useRouter();
  const handleClickProduct = () => {
    router.push("/categories/product/1");
  };
  return (
    <div className={styles.container} onClick={handleClickProduct}>
      <Link href="/product/1">
        <Image src={img} alt="product1" />
        <p>Little Armchair Sheepskin</p>
        <p>200$</p>
      </Link>
    </div>
  );
};

export default CardItem;
