import { configureStore } from "@reduxjs/toolkit";
import { Delete_Comments, Import_Comments, Comments } from "./Slices/Comment";
import { Delete_Post, Import_Post, Posts } from "./Slices/PostSlice";
import { Import_User, Infos } from "./Slices/InfoSlice";

export const store = configureStore({
  reducer: {
    comments: Comments,
    posts: Posts,
    info: Infos,
  },
});

export {
  Delete_Comments,
  Import_Comments,
  Delete_Post,
  Import_Post,
  Import_User,
};
