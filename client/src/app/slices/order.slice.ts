import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialOrder, IOrder } from "../../models/order.model";

const createOrder = createAsyncThunk(
    'order/createOrder',
    async (order: IOrder) => {
        // call API
    }
);

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialOrder,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state,action : PayloadAction)=>{
            //
        })
    },
})