import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { ICartItem, initialCart } from "../../models/cart.model";
export const cartSlice = createSlice({
    name : 'cart',
    initialState : initialCart,
    reducers : {
        addToCart : (state, action : PayloadAction<ICartItem>) => {
            state.items = [...state.items, action.payload]
            state.quantity += action.payload.quantity;
            state.total += Number(action.payload.product.price);
        
        },
        removeFromCart : (state, action : PayloadAction<ICartItem>) => {
            state.items = state.items.filter(item => item.product.no !== action.payload.product.no);
            state.quantity -= action.payload.quantity;
            state.total -= (Number(action.payload.product.price) * action.payload.quantity);
        },
        changeQuantity : (state, action : PayloadAction<{
            productNo : string,
            quantity : number 
        }>) => {
            for (let i = 0; i < state.items.length; i++) {
                const item = state.items[i];
                if(item.product.no === action.payload.productNo){
                    item.quantity += action.payload.quantity
                }
            }
        }
    }
})

export const {addToCart, removeFromCart, changeQuantity} = cartSlice.actions