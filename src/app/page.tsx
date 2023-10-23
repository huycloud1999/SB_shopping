import Banner from "@/components/banner/banner/Banner";
import BannerReverse from "@/components/banner/bannerReverse/BannerReverse";
import CardList from "@/components/cardList/CardList";
import Featured from "@/components/featured/Featured";
import TrendingItem from "@/components/trendingItem/TrendingItem";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <Featured/>
    <CardList/>
    <Banner/>
    <TrendingItem/>
    <BannerReverse/>
  </div>
  )
}
