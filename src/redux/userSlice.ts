import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "../data/types";

const INITIAL_STATE: UserState = {
    user: null
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        }
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;