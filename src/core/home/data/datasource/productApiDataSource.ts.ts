import axios from "axios";
import { API_BASE } from "@/common/constants/api-endpoint";
import { ProductModel } from "../model/productModel";

export class ProductApiDataSource {
  async getProducts(): Promise<ProductModel[]> {
    const res = await axios.get(`${API_BASE}`);
    const products = res.data.products || [];
    return products.map((item: Record<string, unknown>) =>
      ProductModel.fromJson(item)
    );
  }

  async getProductById(id: number): Promise<ProductModel> {
    const res = await axios.get(`${API_BASE}/${id}`);
    return ProductModel.fromJson(res.data);
  }
}
