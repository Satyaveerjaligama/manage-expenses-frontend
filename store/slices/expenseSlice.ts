import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "./centralDataSlice";
import { KEYS_OF_EXPENSE_SLICE } from "@/utils/constants";

interface ExpenseSliceProps {
  expenseDetails: {
    label: string;
    amount: string;
    category: string;
    paymentMethod: string;
    paymentType: string;
    date: string;
  };
}

export const expenseSliceInitialState: ExpenseSliceProps = {
  expenseDetails: {
    label: "",
    amount: "",
    category: "",
    paymentMethod: "",
    paymentType: "",
    date: "",
  },
};

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: expenseSliceInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateExpenseSlice: (state: any, action: PayloadAction<Payload>) => {
      if (Object.keys(KEYS_OF_EXPENSE_SLICE).includes(action.payload.key)) {
        state[action?.payload?.key] = action.payload.value;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearExpenseDetails: (state: any) => {
      state.expenseDetails = expenseSliceInitialState.expenseDetails;
    },
  },
});

export default expenseSlice.reducer;

export const { updateExpenseSlice, clearExpenseDetails } = expenseSlice.actions;
