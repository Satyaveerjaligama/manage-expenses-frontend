import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "./centralDataSlice";
import { KEYS_OF_EXPENSE_SLICE } from "@/utils/constants";

interface ExpenseSliceProps {
  expenseDetails: {
    expenseId: string;
    expenseName: string;
    amount: string;
    category: string;
    paymentMethod: string;
    paymentType: string;
    date: string;
  };
  expensesList: {
    expenseId: string;
    userOrGroupId: string;
    expenseName: string;
    amount: number;
    category: string;
    paymentMethod: string;
    date: string;
    paymentType?: string;
    addedBy?: string;
  }[];
}

export const expenseSliceInitialState: ExpenseSliceProps = {
  expenseDetails: {
    expenseId: "",
    expenseName: "",
    amount: "",
    category: "",
    paymentMethod: "",
    paymentType: "",
    date: "",
  },
  expensesList: [],
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
