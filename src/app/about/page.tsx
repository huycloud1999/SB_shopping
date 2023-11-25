"use client";
import React from "react";
import Cart from "@/components/Cart/Cart";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
const About: React.FC = () => {
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen
  );
  return (
    <div>
      About me
      {isModalOpen && <Cart />}
    </div>
  );
};

export default About;
