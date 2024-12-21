import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "./centralDataSlice";
import { KEYS_OF_GROUP_EXPENSE_SLICE } from "@/utils/constants";

const groupExpenseSliceInitialState = {
  groupName: "",
  groupCode: "",
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
