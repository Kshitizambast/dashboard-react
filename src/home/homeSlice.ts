import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../../app/store";
import axios from "axios";
import { BASE_URL } from "../constants/API";


interface HomeState {
    loading: boolean;
    error: string | null;
    activeNavTab: number;
}


const initialState = {
    loading: false,
    error: null,
    activeNavTab: 0

} as HomeState;

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setActiveNavTab: (state, action: PayloadAction<number>) => {
            state.activeNavTab = action.payload;
        }
    }
});

export const { setLoading, setActiveNavTab } = homeSlice.actions;



export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;