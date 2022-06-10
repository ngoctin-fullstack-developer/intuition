import ProductAPI from "../apis/http.product";
import { IProduct } from "../models/product.model";

export default class ProductService{
    static async getAllProducts() {
        var response = await ProductAPI.getAllProducts();
        if(response) return response;
        return [];
    }
    static async getProductsByLikeName(searchValue : string, limit : number){
        var response = await ProductAPI.getProductsByLikeName(searchValue,limit);
        if(response) return response;
        return [];
    }
    static async getProductByID(productNo : string){
        var response = await ProductAPI.getProductByID(productNo);
        if(response) return response;
        return null;
    }
}