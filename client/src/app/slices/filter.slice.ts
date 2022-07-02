import { createSlice } from "@reduxjs/toolkit";
import { initialFilter } from "../../models/filter.model";

export const filterSlice = createSlice({
    name : 'filter',
    initialState : initialFilter,
    reducers : {
        
    }
})

export const {} = filterSlice.actions