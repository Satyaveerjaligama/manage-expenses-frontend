import { configureStore } from "@reduxjs/toolkit";
import centralDataSlice from "@/store/slices/centralDataSlice";
import expenseSlice from "@/store/slices/expenseSlice";
import groupExpenseSlice from "@/store/slices/groupExpenseSlice";
import errorSlice from "@/store/slices/errorSlice";

const store = configureStore({
  reducer: {
    centralDataSlice,
    expenseSlice,
    groupExpenseSlice,
    errorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
