import { ProductRepository } from "../repositories/productRepository";

export class GetProductsUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute() {
    return this.productRepository.getProducts();
  }
}
