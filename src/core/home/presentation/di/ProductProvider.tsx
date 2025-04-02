"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useDispatch } from "react-redux";
import { ProductRepositoryImpl } from "../../data/repositories/productRepositoryImpl";
import { ProductViewModel } from "../viewmodel/ProductViewModel";
import { ProductApiDataSource } from "../../data/datasource/productApiDataSource.ts";
import { GetProductsUsecase } from "../../domain/usecase/getProductsUseCase";
import { GetProductByIdUsecase } from "../../domain/usecase/getProductDetailUseCase";

interface ProductContextType {
  productViewModel: ProductViewModel;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const dataSource = new ProductApiDataSource();
  const repository = new ProductRepositoryImpl(dataSource);

  const getProductsUsecase = new GetProductsUsecase(repository);
  const getProductByIdUsecase = new GetProductByIdUsecase(repository);

  const productViewModel = new ProductViewModel(
    dispatch,
    getProductsUsecase,
    getProductByIdUsecase
  );

  return (
    <ProductContext.Provider value={{ productViewModel }}>
      {children}
    </ProductContext.Provider>
  );
};
