import { combineReducers, configureStore } from "@reduxjs/toolkit";
import centralDataSlice from "@/store/slices/centralDataSlice";
import expenseSlice from "@/store/slices/expenseSlice";
import groupExpenseSlice from "@/store/slices/groupExpenseSlice";
import errorSlice from "@/store/slices/errorSlice";
import utilitySlice from "@/store/slices/utilitySlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  centralDataSlice,
  expenseSlice,
  groupExpenseSlice,
  errorSlice,
  utilitySlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
