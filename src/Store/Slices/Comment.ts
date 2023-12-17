import { createSlice } from "@reduxjs/toolkit";

type Comment = {
  comment: string[];
};

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  } as Comment,
  reducers: {
    Import_Comments(state, action) {
      state.comment = [...state.comment, action.payload];
      console.log("Import", state.comment);
    },
    Delete_Comments(state, action) {
      console.log("Delete", state, action);
    },
  },
});

export const Comments = CommentSlice.reducer;
export const { Import_Comments, Delete_Comments } = CommentSlice.actions;
