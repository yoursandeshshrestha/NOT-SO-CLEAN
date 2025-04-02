import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../domain/entity/productEntity";

interface ProductState {
  products: ProductEntity[];
  selectedProduct: ProductEntity | null;
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductEntity[]>) {
      state.products = action.payload;
    },
    setSelectedProduct(state, action: PayloadAction<ProductEntity | null>) {
      state.selectedProduct = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct, setLoading } =
  productSlice.actions;
export const productSliceReducer = productSlice.reducer;
