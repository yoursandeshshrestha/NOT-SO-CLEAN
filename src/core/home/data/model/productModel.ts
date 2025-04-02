import { ProductEntity } from "../../domain/entity/productEntity";

export interface ProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export const ProductModelMapper = {
  fromJson: (json: any): ProductModel => ({
    id: json.id,
    title: json.title,
    description: json.description,
    price: json.price,
    thumbnail: json.thumbnail,
  }),

  toEntity: (model: ProductModel): ProductEntity => ({
    id: model.id,
    name: model.title,
    description: model.description,
    price: model.price,
    thumbnail: model.thumbnail,
  }),
};
