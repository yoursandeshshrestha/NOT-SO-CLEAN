import { ProductEntity } from "../entity/productEntity";

export interface ProductRepository {
  getProducts(): Promise<ProductEntity[]>;
  getProductById(id: number): Promise<ProductEntity>;
}
