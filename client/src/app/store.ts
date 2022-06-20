import {configureStore , ThunkAction, Action} from '@reduxjs/toolkit'
import { addressSlice } from './slices/address.slice';
import { authSlice } from './slices/auth.slice';
import { canvasSlice } from './slices/canvas.slice';
import { cartSlice } from './slices/cart.slice';
import { orderSlice } from './slices/order.slice';
import { popupSlice } from './slices/popup.slice';
import { userSlice } from './slices/user.slice';
export const store = configureStore({
    reducer : {
        canvas : canvasSlice.reducer,
        cart : cartSlice.reducer,
        address : addressSlice.reducer,
        popup : popupSlice.reducer,
        order : orderSlice.reducer,
        auth : authSlice.reducer,
        user : userSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export default store;
// export selections

export const canvasSelector = (state : RootState) => state.canvas
export const cartSelector = (state : RootState) =>  state.cart
export const addressSelector = (state : RootState) => state.address
export const popupSelector = (state : RootState) => state.popup
export const orderSelector = (state:RootState) => state.order
export const authSelector = (state : RootState) => state.auth
export const userSelector = (state : RootState) => state.user