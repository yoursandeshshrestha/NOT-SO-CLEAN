import { ProductRepository } from "../../domain/repositories/productRepository";
import { ProductEntity } from "../../domain/entity/productEntity";
import { ProductApiDataSource } from "../datasource/productApiDataSource.ts";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly productApi: ProductApiDataSource) {}

  async getProducts(): Promise<ProductEntity[]> {
    const products = await this.productApi.getProducts();
    return products.map((p) => p.toEntity());
  }

  async getProductById(id: number): Promise<ProductEntity> {
    const product = await this.productApi.getProductById(id);
    return product.toEntity();
  }
}
