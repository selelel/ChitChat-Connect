import { createSlice } from "@reduxjs/toolkit";
import { UserInfoThunk } from "../Thunks/UserInfoThunk";
import { SerializedError } from "@reduxjs/toolkit";
import { initialStateProps } from "../../Types/Slice";

const UserSlice = createSlice({
  name: "user/info",
  initialState: {
    data: [],
    error: { code: "", message: "" },
  } as initialStateProps,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(UserInfoThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(UserInfoThunk.rejected, (state, action) => {
      const serializedError: SerializedError = action.error as SerializedError;
      state.error.code = serializedError.code ?? "";
      state.error.message = serializedError.message ?? "";
    });
  },
});

export const userInfoReducer = UserSlice.reducer;
