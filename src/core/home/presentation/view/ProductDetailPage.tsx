"use client";

import React, { useEffect } from "react";
import { useProduct } from "../di/ProductProvider";
import { useAppSelector } from "@/common/hooks/reduxHooks";

const ProductDetailPage = ({ id }: { id: string }) => {
  const { productViewModel } = useProduct();
  const { selectedProduct, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      productViewModel.fetchProductDetail(Number(id));
    }
  }, [id, productViewModel]);

  if (loading) return <div>Loading...</div>;
  if (!selectedProduct) return <div>No Product Found</div>;

  return (
    <div>
      <h2>{selectedProduct.name}</h2>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      <img src={selectedProduct.thumbnail} alt={selectedProduct.name} />
    </div>
  );
};

export default ProductDetailPage;
