import { configureStore } from "@reduxjs/toolkit";
import centralDataSlice from "@/store/slices/centralDataSlice";

const store = configureStore({
  reducer: {
    centralDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
