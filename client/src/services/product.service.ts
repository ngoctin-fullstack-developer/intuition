import ProductAPI from "../apis/http.product";
import { IProduct } from "../models/product.model";

export default class ProductService{
    static async getAllProducts() {
        var response = await ProductAPI.getAllProducts();
        if(response) return response;
        return [];
    }
}