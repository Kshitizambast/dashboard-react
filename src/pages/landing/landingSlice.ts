import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../../../app/store";
import axios from "axios";
import { BASE_URL } from "../../constants/API"


interface LandingState {
    sessions: Session[];
    loading: boolean;
    error: string | null;
    sessionId: string | null;

}


export interface Session {
    id: number;
    createdAt: string;
    name: string;
    performance: number;
    keyword: string;

}

const initialState = {
    sessions: [], 
    loading: false,
    error: null,
    sessionId: null,

} as LandingState;


export const landingSlice = createSlice({
    name: "landing",
    initialState,
    reducers: {
        setSessions: (state, action: PayloadAction<Session[]>) => {
            state.sessions = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setSessionId: (state, action: PayloadAction<string | null>) => {
            state.sessionId = action.payload;
        }

    }
});

export const { setSessions, setLoading, setError, setSessionId } = landingSlice.actions;




export const getSessions = () => (dispatch: AppDispatch) => {
   axios.get<Session[], any>(BASE_URL + '/sessions/default')
        .then(async response  => {
            if(response.data.statusCode == 200 && response.data.success)
               await dispatch(setSessions(response.data.data));
            else
                await dispatch(setError(response.data.error));
        })
        .catch(error => {
            dispatch(setError(error.message));
            console.log(error);
        });
};

export const selectLanding = (state: RootState) => state.landing;

export default landingSlice.reducer;