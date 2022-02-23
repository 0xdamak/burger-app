import { configureStore } from "@reduxjs/toolkit";
import burgerBuilderSlice from "./features/burgerBuilderSlice/burgerBuilderSlice";

export default configureStore({
  reducer: { burgerBuilder: burgerBuilderSlice },
});
