"use client";
import { useEffect, useRef } from "react";
import Banner from "@/components/banner/banner/Banner";
import BannerReverse from "@/components/banner/bannerReverse/BannerReverse";
import CardList from "@/components/cardList/CardList";
import Featured from "@/components/featured/Featured";
import TrendingItem from "@/components/trendingItem/TrendingItem";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const routerRef = useRef(router);
  routerRef.current = router;

  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const refreshToken = queryParams.get("refreshToken");

  useEffect(() => {
    if (token && refreshToken) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      routerRef.current.push("/");
    }
  }, [token, refreshToken]);
  return (
    <div>
      <Featured />
      <CardList />
      <Banner />
      <TrendingItem />
      <BannerReverse />
    </div>
  );
}
