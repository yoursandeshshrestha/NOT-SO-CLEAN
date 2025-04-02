"use client";

import React from "react";
import ProductDetailPage from "./ProductDetailPage";

const ProductDetailWrapper = ({ id }: { id: string }) => {
  return <ProductDetailPage id={id} />;
};

export default ProductDetailWrapper;
