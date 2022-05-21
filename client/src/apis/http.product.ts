
import request from 'axios'
import { IProduct } from '../models/product.model';
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
}