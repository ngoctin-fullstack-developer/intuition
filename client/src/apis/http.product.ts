
import request, { AxiosRequestConfig } from 'axios'
import { IProduct } from '../models/product.model';
import { ISearchProductRequest } from '../models/requests.model';
import AuthService from '../services/auth.service'
import httpCommon from './http.common';
export default class ProductAPI{
    static async getAllProducts() {
        try {
            var response = await httpCommon.get('/api/product/getNewestProducts');
            var products : Array<IProduct> = [];
            if(response && response.data){
                products = response.data.products;
            }
            return products;
        } catch (error) {
            if(request.isAxiosError(error) && error.response){
                console.log(error.message)
                return [];
            }
        }        
    }

    static async getProductsByLikeName(searchValue : string ,limit : number){
        try {
            var url = '/api/product/getProductsByLikeName'
                    + `/${searchValue}`
                    + `/${limit}`
                    
            var response = await httpCommon.get(url);
            var products : Array<IProduct> = [];
            if(response && response.data){
                products = response.data.products;
            }
            return products;
        } catch (error) {
            if(request.isAxiosError(error) && error.message){
                console.log(error.message);
                return [];
            }
        }

    }

    static async getProductByID(productNo : string){
        try {
            var url = '/api/product/getProductByID'
                    + `/${productNo}`;
            var response = await httpCommon.get(url);
            var product : IProduct | null = null;
            if(response && response.data)
                product = response.data.product;
            return product;
        } catch (error) {
            if(request.isAxiosError(error) && error.message)
            return null;
        }
    }
}