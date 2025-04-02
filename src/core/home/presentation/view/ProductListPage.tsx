"use client";

import React, { useEffect } from "react";
import { useProduct } from "../di/ProductProvider";
import { useAppSelector } from "@/common/hooks/reduxHooks";
import Link from "next/link";

const ProductListPage = () => {
  const { productViewModel } = useProduct();
  const { products, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    productViewModel.fetchProducts();
  }, [productViewModel]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`}>
            <li key={p.id}>
              {p.name} - ${p.price}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
