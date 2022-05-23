import { createSlice } from "@reduxjs/toolkit"

export interface IOffCanvas {
    type : number, // 0 is SearchBox, 1 is Cart
    isSearchBoxShown : boolean,
    isMyCartShown : boolean,
    isEnableScroll : boolean,
    placement : 'start' | 'end'
}

export const initialSearchBox : IOffCanvas = {
    type : 1,
    isSearchBoxShown : false,
    isMyCartShown : false,
    isEnableScroll : false,
    placement : 'start'
}

export const canvasSlice = createSlice({
    name : 'canvas',
    initialState : initialSearchBox,
    reducers : {
        setSearchBoxShown : (state) => {
            state.isSearchBoxShown = true
            state.isMyCartShown = false
        },
        setSearchBoxHidden : (state) => {
            state.isSearchBoxShown = false
        },
        setMyCartShown : (state) => {
            state.isMyCartShown = true
            state.isSearchBoxShown = false
        },
        setMyCartHidden : (state) => {
            state.isMyCartShown = false
        },
    }
})

export const {setSearchBoxShown,setSearchBoxHidden,setMyCartHidden,setMyCartShown} = canvasSlice.actions;