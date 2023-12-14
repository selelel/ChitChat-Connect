import { createSlice } from "@reduxjs/toolkit";

const InfoSlice = createSlice({
  name: "comment",
  initialState: {
    user: [],
  },
  reducers: {
    Import_User(state, action) {
      console.log("Import", state, action);
    },
  },
});

export const Infos = InfoSlice.reducer;
export const { Import_User } = InfoSlice.actions;
