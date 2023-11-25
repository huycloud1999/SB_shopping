import React from "react";
import styles from "./shoppingcart.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openModal } from "@/global/interface";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = [1];
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div className={styles["container"]} onClick={handleOpenModal}>
      <FaCartShopping />
      {cartItems.length > 0 && (
        <div className={styles["item-count"]}>{cartItems.length}</div>
      )}
    </div>
  );
};

export default ShoppingCart;
