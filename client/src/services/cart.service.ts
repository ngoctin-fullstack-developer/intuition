import { ICart, ICartItem } from '../models/cart.model'
export default class CartService {
    static isExistedItem(cart : ICart, cartItem : ICartItem) : boolean {
        var check = false;
        for (let index = 0; index < cart.items.length; index++) {
            const element = cart.items[index];
            if(element.color === cartItem.color
                && element.size === cartItem.size
                && element.product.no === cartItem.product.no
                ){
                    check = true;
            }
        }
        return check;
    }
}