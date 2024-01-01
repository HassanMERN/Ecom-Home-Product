import React from "react";
import HeroSection from "../sections/HeroSection";
import BrowseByCategory from "../sections/BrowseByCategory";
import BestSelling from "../sections/BestSelling";
import ExploreProducts from "../sections/ExploreProducts";
import NewArival from "../sections/NewArival";
import FlashSales from "../sections/FlashSales";
import CTA from "../sections/CTA";
function Home() {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <ExploreProducts />
      <NewArival />
      <CTA />
    </>
  );
}

export default Home;
