const DBConfig = require("../database/database.config")
import DBConnect from 'mssql'
import Order from '../models/order.model'
import OrderDetail from '../models/orderDetail.model';
import DatetimeUtil from '../utils/datetime.util';
export default class OrderDatabaseOperation {
    static async createOrder(order: Order) {
        try {
            var connection = await DBConnect.connect(DBConfig);

            var sql = 'INSERT INTO TORDERS '
                + `VALUES('${order.no}',N'${order.address}',`
                + `${order.quantity},NULL,${order.paymentMethod},`
                + `'${order.subTotal}','${order.userID}','${order.phoneNumber}',`
                + `N'${order.fullname}',${order.status},'${order.insertDate}',NULL)`;
            var result = await connection.request().query(sql);
            if (Number(result.rowsAffected) > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    static async createOrderDetail(orderDetail: OrderDetail) {
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = 'INSERT INTO TPRODUCTORDER '
                + `VALUES('${orderDetail.orderNo}','${orderDetail.productNo}',` 
                + `${orderDetail.quantity},'${orderDetail.color}',${orderDetail.total})`;
            var result = await connection.request().query(sql);
            if (Number(result.rowsAffected) > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}