const DBConfig = require("../database/database.config")
import DBConnect from 'mssql'
export default class ProductDatabseOperation {

    static async getNewestProducts() {
        var connection = await DBConnect.connect(DBConfig);
        // var sql = 'SELECT * FROM TPRODUCTS P ORDER BY P.INSERT_DATE DESC ' 
        // + 'OFFSET 0 ROWS ' +
        // + 'FETCH NEXT 4 ROWS ONLY';
        var sql = 'SELECT * FROM TPRODUCTS P ORDER BY P.INSERT_DATE DESC OFFSET 0 ROWS FETCH NEXT 4 ROWS ONLY';
        var result = await connection.request().query(sql);
        return result.recordset;
    }

    static async getSizeByProductNo(productNo : string){
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT S.value FROM TPRODUCTS P '
            +  'JOIN TPRODUCTSIZE M ON P.no = M.product_no ' 
            +  'JOIN TSIZES S ON M.size_no = S.no '
            +  `WHERE P.no =  ${productNo}`;
        var result = await connection.request().query(sql);
        var returnValues = [];
        for (let index = 0; index < result.recordset.length; index++) {
            const value = result.recordset[index].value;
            returnValues.push(value);
        }
        return returnValues;
    }

    static async getProductsByLikeName(searchValue : string, limit : number){
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT * FROM TPRODUCTS P '
        + `WHERE P.name LIKE  + '%${searchValue}%' `
        + 'ORDER BY P.insert_date '
        + 'OFFSET 0 ROWS '
        + `FETCH NEXT ${limit} ROWS ONLY`;
        var result = await connection.request().query(sql);
        return result.recordset;
    }
}