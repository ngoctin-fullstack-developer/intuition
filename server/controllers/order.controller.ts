import OrderDatabaseOperation from "../database/order.database.operation";
import Order from "../models/order.model";
import OrderDetail from "../models/orderDetail.model";
import { Request,Response } from "express";
import DatetimeUtil from "../utils/datetime.util";

export default class OrderController {
    static async createOrder(request : Request, response : Response){
        var order : Order = {
            no : request.body.no,
            address : request.body.address,
            fullname : request.body.fullname,
            promotionID : request.body.promotionID,
            userID : request.body.userID,
            paymentMethod : Number(request.body.paymentMethod),
            quantity : request.body.quantity,
            status : Number(request.body.status),
            subTotal : request.body.subTotal,
            insertDate : DatetimeUtil.getCurrentDateTime(),
            modifiedDate : ''
        }
        var result = await OrderDatabaseOperation.createOrder(order);
        return response.json(result)
    }

    static async createOrderDetail(request : Request, response : Response){
        var orderDetail : OrderDetail = {
            orderNo : request.body.orderNo,
            productNo : request.body.productNo,
            quantity : request.body.quantity,
            total : request.body.total
        }
        var result = await OrderDatabaseOperation.createOrderDetail(orderDetail);
        return response.json(result)
    }
}
