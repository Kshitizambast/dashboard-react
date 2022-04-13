import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../../app/store";
import axios from "axios";
import { BASE_URL } from "../constants/API";


interface HomeState {
    sessions: Session[];
    loading: boolean;
    error: string | null;
    activeNavTab: number;
}

export interface Session {
    id: number;
    createdAt: string;
    name: string;
    performance: number;
    keywords: string;

}

const initialState = {
    sessions: [], 
    loading: false,
    error: null,
    activeNavTab: 0

} as HomeState;

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setSessions: (state, action: PayloadAction<Session[]>) => {
            state.sessions = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setActiveNavTab: (state, action: PayloadAction<number>) => {
            state.activeNavTab = action.payload;
        }
    }
});

export const { setSessions, setLoading, setActiveNavTab } = homeSlice.actions;


export const getSessions = () => (dispatch: AppDispatch) => {
    axios.get<Session[]>(BASE_URL + 'edusense/sessions/default')
        .then(response  => {
            dispatch(setSessions(response.data));
        })
        .catch(error => {
            console.log(error);
        });
};

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;