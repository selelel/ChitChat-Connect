import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  reducers: {
    Import_Comments(state, action) {
      console.log("Import", state, action);
    },
    Delete_Comments(state, action) {
      console.log("Delete", state, action);
    },
  },
});

export const Comments = CommentSlice.reducer;
export const { Import_Comments, Delete_Comments } = CommentSlice.actions;
