import {initialCart,ICart} from '../models/cart.model';
import {IAddress} from '../models/address.model';
export interface IOrder {
    id : string,
    cart : ICart,
    address : string,
    paymentMethod : 0 | 1 | 2 | 3;
    // 0 : COD
    // 1 : Internet Banking
    // 2 : Momo
    // 3 : Card
}

export const initialOrder : IOrder = {
    id : '0',
    cart : initialCart,
    address : '',
    paymentMethod : 0
}