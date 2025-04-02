import { ProductRepository } from "../repositories/productRepository";

export class GetProductByIdUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: number) {
    return this.productRepository.getProductById(id);
  }
}
