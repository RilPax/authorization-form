import { createSlice } from "@reduxjs/toolkit";
import type { TUser } from "../../utils/types";

interface userSliceState {
    isAuth: boolean
    user: TUser | null
}

const initialState: userSliceState = {
    isAuth: false,
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => (
        builder
            
    )

})

export default userSlice.reducer