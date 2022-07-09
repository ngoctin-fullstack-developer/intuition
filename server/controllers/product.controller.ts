import { Request, Response } from "express";
import ProductDatabseOperation from "../database/product.operation";
import { IFilter } from "../models/filter.model";
import Product from "../models/product.model";

export default class ProductController {
    static async getNewestProducts(request: Request, response: Response) {
        console.log("ProductController")
        var products = await ProductDatabseOperation.getNewestProducts();
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            var sizes = await ProductDatabseOperation.getSizeByProductNo(product.no);
            var colors = await ProductDatabseOperation.getColorsByProductNo(product.no);
            product.sizes = sizes;
            product.colors = colors;
        }
        return response.json({
            products: products
        })
    }

    static async getProductsByLikeName(request: Request, response: Response) {
        var searchValue: string = request.params.searchValue;
        var limit: number = Number(request.params.limit);
        var products = await ProductDatabseOperation.getProductsByLikeName(searchValue, limit);
        return response.json({
            products
        })
    }

    static async getProductByID(request: Request, response: Response) {
        var productNo: string = request.params.productNo;
        var product = await ProductDatabseOperation.getProductByID(productNo);
        var sizes = await ProductDatabseOperation.getSizeByProductNo(product.no);
        var colors = await ProductDatabseOperation.getColorsByProductNo(product.no);
        product.sizes = sizes;
        product.colors = colors;
        return response.json({
            product
        })
    }

    static async getProductsByFilter(request: Request, response: Response) {
        var cates: Array<string> = request.body.cates;
        var sizes: Array<string> = request.body.sizes;
        var colors: Array<string> = request.body.colors;
        var price: {
            min: number,
            max: number
        } = request.body.price;
        var filter: IFilter = { cates, sizes, colors, price };
        console.log(filter)
        var products = await ProductDatabseOperation.getProductsByFilter(filter);
        for (let i = 0; i < products.length; i++) {
            var product = products[i];
            var tmpSizes = await ProductDatabseOperation.getSizeByProductNo(product.no);
            var tmpColors = await ProductDatabseOperation.getColorsByProductNo(product.no);
            products[i].sizes = tmpSizes;
            products[i].colors = tmpColors;
        }
        console.log(products)
        return response.status(200).json({products});
    }

}