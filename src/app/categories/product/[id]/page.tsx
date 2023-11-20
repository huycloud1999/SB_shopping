"use client";
import React, { useState, MouseEvent } from "react";
import styles from "./product.module.scss";
import Image from "next/image";
import TrendingItem from "@/components/trendingItem/TrendingItem";
import { BsCart4 } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";

const Product: React.FC = () => {
  const [image, setImage] = useState<any>(
    "https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-a7-mark-iii/sony-alpha-a7-mark-iii8.jpg"
  );
  const [total, setTotal] = useState<number>(0);
  const handleDecrease: () => void = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  const handleIncrease: () => void = () => {
    setTotal(total + 1);
  };
  const changeImage = (e: MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    setImage(target);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productZone}>
        <div className={styles.productZoneTop}>
          <div className={styles.productZoneTopLeft}>
            <div className={styles.bigImage}>
              <Image src={image} alt="camera" width={1000} height={1000} />
            </div>
            <div className={styles.smallImage}>
              <Image
                src="https://bizweb.dktcdn.net/100/369/815/products/ilce7m3-cmos-mount-image-large-750x750.jpg?v=1638779216143"
                alt="camera1"
                onMouseOver={changeImage}
                width={1000}
                height={1000}
              />
              <Image
                src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-a7-mark-iii/sony-alpha-a7-mark-iii8.jpg"
                alt="camera2"
                onMouseOver={changeImage}
                width={1000}
                height={1000}
              />
              <Image
                src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-a7-mark-iii/sony-alpha-a7-mark-iii.jpg"
                alt="camera3"
                onMouseOver={changeImage}
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className={styles.productZoneTopRight}>
            <h2>Sony A7 mark iii</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              velit harum aliquid? Suscipit quos minus, accusantium
              reprehenderit aliquid inventore ipsam ipsa facere ducimus
              obcaecati? Velit nam atque dolorem cum placeat.
            </p>
            <div className={styles.price}>
              <h3>Quatity</h3>
              <div className={styles.countItem}>
                <button className={styles.btnCount} onClick={handleDecrease}>
                  -
                </button>
                <div className={styles.count}>{total}</div>
                <button className={styles.btnCount} onClick={handleIncrease}>
                  +
                </button>
              </div>
              <div className={styles.prices}>{100 * total} $</div>
            </div>
            <div className={styles.btnShopping}>
              <button>
                <FaShoppingBasket />
                Add to cart
              </button>
              <button>
                <BsCart4 />
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className={styles.productZoneBot}>
          <div className={styles.detailItem}>
            <h3>Texture:</h3>
            <p>Comfy Material</p>
          </div>
          <div className={styles.detailItem}>
            <h3>Weight:</h3>
            <p>25kg</p>
          </div>
          <div className={styles.detailItem}>
            <h3>Size:</h3>
            <p>60cm x 30cm</p>
          </div>
        </div>
      </div>
      <TrendingItem />
    </div>
  );
};

export default Product;
