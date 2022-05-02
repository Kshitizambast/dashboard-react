import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../../app/store";
import axios from "axios";
import { BASE_URL } from "../constants/API";


interface HomeState {
    loading: boolean;
    error: string | null;
    activeNavTab: number;
    sessionId: number;
    sitAndStandData: Array<any>;
    instructorMovementData: Array<any>;
    audioStats: Array<any>;
}


const initialState = {
    loading: false,
    error: null,
    activeNavTab: 0,
    sessionId: 0,
    sitAndStandData: [],
    instructorMovementData: [],
    audioStats: []

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
        },

        setSitAndStandData: (state, action: PayloadAction<any>) => {
            state.sitAndStandData = action.payload;
        },
        setInstructorMovementData: (state, action: PayloadAction<any>) => {
            state.instructorMovementData = action.payload;
        },
        setSessionId: (state, action: PayloadAction<number>) => {
            state.sessionId = action.payload;
        },
        setAudioStats: (state, action: PayloadAction<any>) => {
            state.audioStats = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },

        reset(state) {
            state = initialState;
        },
    }
});

export const { setLoading, setActiveNavTab, setSitAndStandData, setInstructorMovementData, setAudioStats, setSessionId, setError, reset } = homeSlice.actions;


export const getSitAndStandData = (sessionId: any) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    axios.get<any, any>(`${BASE_URL}/student/sitvsstand/${sessionId}`)
        .then(res => {
            if (res.data.statusCode === 200) {
                dispatch(setLoading(false));
                dispatch(setSitAndStandData(res.data.data));
                
            }
            else {
                const errMsg: string = 'Something went wrong. Please try again later.';
            }

        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err.message));
        });
}

export const getInstructorMovementData = (sessionId: any) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    axios.get<any, any>(`${BASE_URL}/instructor/movement/${sessionId}`)
        .then(res => {
            if (res.data.statusCode === 200) {
                dispatch(setLoading(false));
                dispatch(setInstructorMovementData(res.data.data));
            }
            else {
                const errMsg: string = 'Something went wrong. Please try again later.';
            }
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err.message));
        });
}

export const getAudioStats = (sessionId: any) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    axios.get<any, any>(`${BASE_URL}/audiostats/${sessionId}`)
        .then(res => {
            if (res.data.statusCode === 200) {
                dispatch(setLoading(false));
                dispatch(setAudioStats(res.data.data.studentSpeechInfo));
            }
            else {
                const errMsg: string = 'Something went wrong. Please try again later.';
            }   
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err.message));
        });
}


export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;