import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { intitialTokens, ITokens } from "../../models/tokens.model";

export const authSlice = createSlice({
    name : 'auth',
    initialState : intitialTokens,
    reducers : {
        saveTokens : (state,action : PayloadAction<ITokens>) => {
            const {accessToken, refreshToken} = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
        }
    }
})
export const {saveTokens} = authSlice.actions;