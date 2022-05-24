import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { useDispatch } from "react-redux";
import { isTemplateExpression } from "typescript";
import { ICartItem, initialCart } from "../../models/cart.model";
import { AppDispatch } from "../store";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            state.items = [...state.items, action.payload]
            state.quantity += action.payload.quantity;
            state.total += Number(action.payload.product.price);

        },
        removeFromCart: (state, action: PayloadAction<ICartItem>) => {
            console.log("removeFromCart")
            state.items = state.items.filter(item => item.product.no !== action.payload.product.no);
            state.quantity -= action.payload.quantity;
            state.total -= (Number(action.payload.product.price) * action.payload.quantity);
            state.items.forEach(item => {
                console.log(item.product.no)
            })
        },
        updateQuantity: (state, action: PayloadAction<{
            type: string,
            item: ICartItem,
            quantity: number,

        }>) => {
            switch (action.payload.type) {
                case 'increment':
                    for (let index = 0; index < state.items.length; index++) {
                        const element = state.items[index];
                        if (element.product.no === action.payload.item.product.no) {
                            element.quantity += action.payload.quantity;
                            state.quantity += action.payload.quantity;
                            console.log(Number(element.product.price))
                            console.log(action.payload.quantity)
                            state.total += (Number(element.product.price) * action.payload.quantity)
                        }
                    }
                    break;
                case 'decrement':
                    for (let index = 0; index < state.items.length; index++) {
                        const element = state.items[index];
                        if (element.product.no === action.payload.item.product.no) {
                            element.quantity -= action.payload.quantity;
                            state.quantity -= action.payload.quantity;
                            console.log(Number(element.product.price))
                            console.log(action.payload.quantity)
                            state.total -= (Number(element.product.price) * action.payload.quantity)
                        }
                    }
                    break;
            }
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions