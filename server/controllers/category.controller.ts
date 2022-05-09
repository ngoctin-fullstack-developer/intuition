import { Request, Response } from 'express';
import CategoryDatabaseOperation from '../database/category.operation';
import Category from '../models/category.model';
import DatetimeUtil from '../utils/datetime.util';
export default class CategoryController {
 
    static async createCategory(request : Request, response : Response){
        var category : Category = {
            no : request.body.no,
            name : request.body.name,
            insertID : request.body.insertID,
            insertDate : DatetimeUtil.getCurrentDateTime(),
            modifiedID : '',
            modifiedDate : ''
        }
        var result = await CategoryDatabaseOperation.createCategory(category);
        return response.json(result);
    }

    static async findCategoryByCateID(request : Request, response : Response){
        var cateNo : string = request.body.catetID;
        var result = await CategoryDatabaseOperation.findCategoryByCateID(cateNo);
        return response.json({
            status : 200,
            data :  result
        })
    }

    static async findAllCategories(request : Request, response : Response){
        var result = await CategoryDatabaseOperation.findAllCategories();
        return response.json({
            status : 200,
            data : result
        });
    }

}