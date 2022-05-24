import {configureStore , ThunkAction, Action} from '@reduxjs/toolkit'
import { canvasSlice } from './slices/canvas.slice';
import { cartSlice } from './slices/cart.slice';
export const store = configureStore({
    reducer : {
        canvas : canvasSlice.reducer,
        cart : cartSlice.reducer
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
