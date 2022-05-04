import { configureStore } from "@reduxjs/toolkit";
import burgerBuilderSlice from "./features/burgerBuilderSlice";
import userSlice from "./features/user";

export default configureStore({
  reducer: { burgerBuilder: burgerBuilderSlice, user: userSlice },
});
