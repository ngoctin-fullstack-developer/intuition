import {configureStore , ThunkAction, Action} from '@reduxjs/toolkit'
import { addressSlice } from './slices/address.slice';
import { canvasSlice } from './slices/canvas.slice';
import { cartSlice } from './slices/cart.slice';
import { popupSlice } from './slices/popup.slice';
export const store = configureStore({
    reducer : {
        canvas : canvasSlice.reducer,
        cart : cartSlice.reducer,
        address : addressSlice.reducer,
        popup : popupSlice.reducer
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