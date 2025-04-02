import axios from "axios";
import { ProductModel } from "../model/productModel";
import { API_BASE } from "@/common/constants/api-endpoint";

export class ProductApiDataSource {
  async getProducts(): Promise<ProductModel[]> {
    const res = await axios.get(`${API_BASE}`);
    console.log("datasource =====", res.data);
    return res.data.products;
  }

  async getProductById(id: number): Promise<ProductModel> {
    const res = await axios.get(`${API_BASE}/${id}`);
    return res.data;
  }
}
