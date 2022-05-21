import { Request, Response } from "express";
import ProductDatabseOperation from "../database/product.operation";

export default class ProductController {
    static async getNewestProducts(request : Request, response : Response){
        var products = await ProductDatabseOperation.getNewestProducts();
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            var sizes = await ProductDatabseOperation.getSizeByProductNo(product.no);
            product.sizes = sizes;
        }
        return response.json({
            products : products
        })
    }
}