import React from "react";
import Hero from "../components/Hero/Hero";
// import Popular from "../components/Popular/Popular";
import Offer from "../components/offer/Offer";
import NewCollections from "../components/newCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
const Shop = () => {
  return (
    <div>
      <Hero />
      {/* <Popular /> */}
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
