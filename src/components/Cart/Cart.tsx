"use client";
import React from "react";
import empty from "@/assets/imgs/socials/272-2727925_continue-shopping-empty-cart-png-transparent-png.png";
import styles from "./Cart.module.scss";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { closeModal } from "@/global/interface";
import { useDispatch } from "react-redux";
import Link from "next/link";
const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const listItem = [
    {
      id: 1,
      name: "SonyA7 mark III",
      quantity: 1,
      price: 100,
      imgURl:
        "https://image.anhducdigital.vn/nhiep-anh/digital-camera/may-anh-mirrorless/sony/sony-alpha-a7-iii/may-anh-sony-alpha-a7-iii-body-only-01.jpg",
    },
    {
      id: 2,
      name: "Cannon 600D",
      quantity: 3,
      price: 100,
      imgURl:
        "https://image.anhducdigital.vn/nhiep-anh/digital-camera/may-anh-mirrorless/sony/sony-alpha-a7-iii/may-anh-sony-alpha-a7-iii-body-only-01.jpg",
    },
    {
      id: 2,
      name: "Cannon 600D",
      quantity: 3,
      price: 100,
      imgURl:
        "https://image.anhducdigital.vn/nhiep-anh/digital-camera/may-anh-mirrorless/sony/sony-alpha-a7-iii/may-anh-sony-alpha-a7-iii-body-only-01.jpg",
    },
    {
      id: 2,
      name: "Cannon 600D",
      quantity: 3,
      price: 100,
      imgURl:
        "https://image.anhducdigital.vn/nhiep-anh/digital-camera/may-anh-mirrorless/sony/sony-alpha-a7-iii/may-anh-sony-alpha-a7-iii-body-only-01.jpg",
    },
    {
      id: 2,
      name: "Cannon 600D",
      quantity: 3,
      price: 100,
      imgURl:
        "https://image.anhducdigital.vn/nhiep-anh/digital-camera/may-anh-mirrorless/sony/sony-alpha-a7-iii/may-anh-sony-alpha-a7-iii-body-only-01.jpg",
    },
  ];
  const calculateSubtotal = () => {
    let subtotal = 0;
    listItem.forEach((item) => {
      subtotal += item.quantity * item.price;
    });
    return subtotal;
  };
  const handleIncreaseQuantity = (itemId: number) => {};

  const handleDecreaseQuantity = (itemId: number) => {};
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>SHOPPING CART(0)</h1>
        <IoMdClose onClick={handleCloseModal} />
      </div>
      <div className={styles.productList}>
        {listItem.length > 0 ? (
          <div className={styles.listItem}>
            <div className={styles.productZone}>
              {listItem.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.Item}>
                    <Image
                      src={item.imgURl}
                      alt={item.name}
                      width={150}
                      height={150}
                      className={styles.productImage}
                    />
                    <div className={styles.productDetails}>
                      <h3>{item.name}</h3>
                      <div className={styles.quantityButtons}>
                        <button onClick={() => handleDecreaseQuantity(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncreaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                      <p>Price: ${item.price}</p>
                      <p>Total: ${item.quantity * item.price}</p>
                    </div>
                  </div>
                  <IoMdClose className={styles.closeBtn} />
                </div>
              ))}
            </div>
            <div className={styles.productZoneBot}>
              <p>Subtotal: {calculateSubtotal()}$</p>
              <button>Go to Checkout</button>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <Image
              src={empty}
              alt="empty"
              width={1920}
              height={1080}
              className={styles.emptyImg}
            />
            <h2>Your cart is empty</h2>
            <Link href="/categories">
              <button onClick={handleCloseModal}>Keep Browsing</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
