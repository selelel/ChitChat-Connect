import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "comment",
  initialState: {
    Post: [],
  },
  reducers: {
    Import_Post(state, action) {
      console.log("Import", state, action);
    },
    Delete_Post(state, action) {
      console.log("Delete", state, action);
    },
  },
});

export const Posts = PostSlice.reducer;
export const { Import_Post, Delete_Post } = PostSlice.actions;
