import { ProductRepository } from "../../domain/repositories/productRepository";
import { ProductEntity } from "../../domain/entity/productEntity";
import { ProductModelMapper } from "../model/productModel";
import { ProductApiDataSource } from "../datasource/productApiDataSource.ts";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly productApi: ProductApiDataSource) {}

  async getProducts(): Promise<ProductEntity[]> {
    const products = await this.productApi.getProducts();
    return products.map((p) => ProductModelMapper.toEntity(p));
  }

  async getProductById(id: number): Promise<ProductEntity> {
    const product = await this.productApi.getProductById(id);
    return ProductModelMapper.toEntity(product);
  }
}
