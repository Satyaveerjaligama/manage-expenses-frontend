import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "./centralDataSlice";
import { KEYS_OF_GROUP_EXPENSE_SLICE } from "@/utils/constants";

interface GroupExpenseSliceProps {
  groupName: string;
  groupCode: string;
  groupsList: {
    groupId: string;
    groupName: string;
    adminId: string;
    members: string[];
    requests: string[];
  }[];
  groupJoiningRequestsList: {
    userId: string;
    userName: string;
  }[];
  groupExpensesList: {
    expenseId: string;
    expenseName: string;
    amount: number;
    date: string;
    paymentMethod: string;
    paymentType: string;
    addedBy: string;
  }[];
}

export const groupExpenseSliceInitialState: GroupExpenseSliceProps = {
  groupName: "",
  groupCode: "",
  groupsList: [],
  groupJoiningRequestsList: [],
  groupExpensesList: [],
};

const groupExpenseSlice = createSlice({
  name: "groupExpenseSlice",
  initialState: groupExpenseSliceInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateGroupExpenseSlice: (state: any, action: PayloadAction<Payload>) => {
      if (
        Object.keys(KEYS_OF_GROUP_EXPENSE_SLICE).includes(action.payload.key)
      ) {
        state[action?.payload?.key] = action.payload.value;
      }
    },
  },
});

export default groupExpenseSlice.reducer;

export const { updateGroupExpenseSlice } = groupExpenseSlice.actions;
