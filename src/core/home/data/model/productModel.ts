import { ProductEntity } from "../../domain/entity/productEntity";

export class ProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

  constructor({
    id,
    title,
    description,
    price,
    thumbnail,
  }: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  static fromJson(json: Record<string, unknown>): ProductModel {
    return new ProductModel({
      id: json.id as number,
      title: json.title as string,
      description: json.description as string,
      price: json.price as number,
      thumbnail: json.thumbnail as string,
    });
  }

  toEntity(): ProductEntity {
    return {
      id: this.id,
      name: this.title,
      description: this.description,
      price: this.price,
      thumbnail: this.thumbnail,
    };
  }
}
