import { configureStore } from "@reduxjs/toolkit";

import homeReducer from '../src/home/homeSlice';
import landingReducer from '../src/pages/landing/landingSlice'



export const store = configureStore({
    reducer: {
        home: homeReducer,
        landing: landingReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;