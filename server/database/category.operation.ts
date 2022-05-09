import Category from "../models/category.model";
const DBConfig = require('../database/database.config');
import DBConnect from 'mssql'

export default class CategoryDatabaseOperation {
    static async createCategory(category : Category){
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = `INSERT INTO TCATEGORIES VALUES(
                '${category.no}','${category.name}',
                '${category.insertID}','${category.insertDate}',
                '${category.modifiedID}','${category.modifiedDate}'
            )`;
            var result = await connection.request().query(sql);
            if(Number(result.rowsAffected) > 0){
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    static async findAllCategories(){
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = `SELECT * FROM TCATEGORIES`;
            var result = await connection.request().query(sql);
            return result.recordset;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    static async findCategoryByCateID(cateNo : string){
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = `SELECT * FROM TCATEGORIES T WHERE T.NO = '${cateNo}'`;
            var result = await connection.request().query(sql);
            return result.recordset[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}