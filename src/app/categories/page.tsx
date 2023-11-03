"use client";
import React, { useState } from "react";
import styles from "@/app/categories/categpories.module.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import FilterItem from "@/components/filterItem/FilterItem";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <Link href="/">
          <MdKeyboardArrowLeft />
          <h3>Home</h3>
        </Link>
        <h1>{selectedCategory}</h1>
      </div>
      <div className={styles.filter}>
        <ul>
          <li onClick={() => handleCategoryClick("Categories")}>All</li>
          <li onClick={() => handleCategoryClick("Funitures")}>Funitures</li>
          <li onClick={() => handleCategoryClick("Electronics")}>
            Electronics
          </li>
          <li onClick={() => handleCategoryClick("Lamps")}>Lamps</li>
          <li onClick={() => handleCategoryClick("Kitchen")}>Kitchen</li>
          <li onClick={() => handleCategoryClick("Chair")}>Chair</li>
          <li onClick={() => handleCategoryClick("Skin Care")}>Skin Care</li>
        </ul>
      </div>
      <div className="item-container">
        <FilterItem />
      </div>
    </div>
  );
};

export default Categories;
