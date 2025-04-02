import { AppDispatch } from "@/redux/store";
import {
  setLoading,
  setProducts,
  setSelectedProduct,
} from "../state/productSlice";
import { GetProductsUsecase } from "../../domain/usecase/getProductsUseCase";
import { GetProductByIdUsecase } from "../../domain/usecase/getProductDetailUseCase";

export class ProductViewModel {
  constructor(
    private readonly dispatch: AppDispatch,
    private readonly getProductsUsecase: GetProductsUsecase,
    private readonly getProductByIdUsecase: GetProductByIdUsecase
  ) {}

  async fetchProducts() {
    try {
      this.dispatch(setLoading(true));
      const products = await this.getProductsUsecase.execute();
      this.dispatch(setProducts(products));
    } finally {
      this.dispatch(setLoading(false));
    }
  }

  async fetchProductDetail(id: number) {
    try {
      this.dispatch(setLoading(true));
      console.log("Fetching product detail for ID:", id);
      const product = await this.getProductByIdUsecase.execute(id);
      console.log("Product fetched:", product);
      this.dispatch(setSelectedProduct(product));
    } catch (err) {
      console.error("Error fetching product detail:", err);
    } finally {
      this.dispatch(setLoading(false));
    }
  }
}
