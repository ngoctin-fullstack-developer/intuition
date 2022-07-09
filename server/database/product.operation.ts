const DBConfig = require("../database/database.config")
import DBConnect, { IResult } from 'mssql'
import { IFilter } from '../models/filter.model';
import Product from '../models/product.model';
export default class ProductDatabseOperation {

    static async getNewestProducts() {
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT * FROM TPRODUCTS P ORDER BY P.INSERT_DATE DESC OFFSET 0 ROWS FETCH NEXT 3 ROWS ONLY';
        var result = await connection.request().query(sql);
        return result.recordset;
    }

    static async getSizeByProductNo(productNo: string) {
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT S.value FROM TPRODUCTS P '
            + 'JOIN TPRODUCTSIZE M ON P.no = M.product_no '
            + 'JOIN TSIZES S ON M.size_no = S.no '
            + `WHERE P.no =  ${productNo}`;
        var result = await connection.request().query(sql);
        var returnValues = [];
        for (let index = 0; index < result.recordset.length; index++) {
            const value = result.recordset[index].value;
            returnValues.push(value);
        }
        return returnValues;
    }

    static async getColorsByProductNo(productNo: string) {
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT C.value, C.name FROM TPRODUCTS P '
            + 'JOIN TPRODUCTCOLOR M ON P.no = M.product_no '
            + 'JOIN TCOLORS C ON M.color_no = C.no '
            + `WHERE P.no =  ${productNo}`;
        var result = await connection.request().query(sql);
        var returnValues = [];
        for (let index = 0; index < result.recordset.length; index++) {
            const value = result.recordset[index].value;
            const name = result.recordset[index].name;
            returnValues.push({ value, name });
        }
        return returnValues;
    }

    static async getProductsByLikeName(searchValue: string, limit: number) {
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT * FROM TPRODUCTS P '
            + `WHERE P.name LIKE  + '%${searchValue}%' `
            + 'ORDER BY P.insert_date '
            + 'OFFSET 0 ROWS '
            + `FETCH NEXT ${limit} ROWS ONLY`;
        var result = await connection.request().query(sql);
        return result.recordset;
    }

    static async getProductByID(productNo: string) {
        var connection = await DBConnect.connect(DBConfig);
        var sql = 'SELECT * FROM TPRODUCTS P '
            + `WHERE P.no = ${productNo}`;
        var result = await connection.request().query(sql);
        return result.recordset[0];
    }
    static async getProductsByFilter(filter: IFilter) {
        var connection = await DBConnect.connect(DBConfig);
        var { cates, colors, sizes, price } = filter;
        var cateFilterSql = '';
        var colorFilterSql = '';
        var sizeFilterSql = '';
        var sql = 'SELECT P.no,P.name,P.price,P.description, P.quantity, '
            +'P.entp_no, P.cate_no,P.insert_id,P.insert_date,P.modify_id,P.modified_date FROM TPRODUCTS P '
            + 'JOIN TPRODUCTSIZE SP ON P.no = SP.product_no '
            + 'JOIN TSIZES S ON SP.size_no = S.no '
            + 'JOIN TPRODUCTCOLOR PCO ON P.no = PCO.product_no '
            + 'JOIN TCOLORS CO ON CO.no = PCO.color_no '
            + 'JOIN TCATEGORIES CA ON P.cate_no = CA.no '
            + 'WHERE P.quantity > 0 '
            + `AND P.price >= ${price.min} AND P.price <= ${price.max} `
        console.log("cates lenght : " + filter.cates.length)
        if (cates.length > 0) {
            console.log("> 0");
            cateFilterSql = `AND CA.name IN (`;
            for (let i = 0; i < cates.length; i++) {
                if (i !== (cates.length - 1)) {
                    cateFilterSql += `'${cates[i]}',`
                } else {
                    cateFilterSql += `'${cates[i]}'`
                }
            }
            cateFilterSql += ") ";
            sql += cateFilterSql;
        }
        if (colors.length > 0) {
            console.log("> 0");
            colorFilterSql = `AND CO.name IN (`;
            for (let i = 0; i < colors.length; i++) {
                if (i !== (colors.length - 1)) {
                    colorFilterSql += `N'${colors[i]}',`
                } else {
                    colorFilterSql += `N'${colors[i]}'`
                }
            }
            colorFilterSql += ") ";
            sql += colorFilterSql;
        }
        if (sizes.length > 0) {
            console.log("> 0");
            sizeFilterSql = `AND S.value IN (`;
            for (let i = 0; i < sizes.length; i++) {
                if (i !== (sizes.length - 1)) {
                    sizeFilterSql += `'${sizes[i]}',`
                } else {
                    sizeFilterSql += `'${sizes[i]}'`
                }
            }
            sizeFilterSql += ") ";
            sql += sizeFilterSql;
        }
        sql += "GROUP BY P.no,P.name,P.price,P.description, P.quantity, P.entp_no, P.cate_no,P.insert_id,P.insert_date,P.modify_id,P.modified_date";
        console.log(sql);
        var result = await connection.request().query(sql);
        var counter = 0;
        result.recordset.forEach(entry => counter++)
        console.log("counter : " + counter)
        return result.recordset;
    }
}