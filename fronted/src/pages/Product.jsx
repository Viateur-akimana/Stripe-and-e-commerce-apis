import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../components/breadCrums/BreadCrums";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import BoxDescription from "../components/BoxDescription/BoxDescription";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(shopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <BreadCrums product={product} />
      <ProductDisplay/>
      <BoxDescription/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
