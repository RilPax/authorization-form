import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user'
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer:{
        user: userReducer
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Хук для диспатча с типами
export const useAppDispatch: () => AppDispatch = useDispatch;

// Хук для селектора с типами
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;