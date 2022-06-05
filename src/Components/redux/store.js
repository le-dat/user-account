import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
