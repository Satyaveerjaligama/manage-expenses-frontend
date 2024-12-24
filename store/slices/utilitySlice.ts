import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "./centralDataSlice";
import { KEYS_OF_UTILITY_SLICE } from "@/utils/constants";

interface UtilitySliceProps {
  snackBar: {
    open: boolean;
    message: string;
    status: "success" | "error" | "info" | "warning";
  };
}

export const utilitySliceInitialState: UtilitySliceProps = {
  snackBar: {
    open: false,
    message: "",
    status: "success",
  },
};

const utilitySlice = createSlice({
  name: "utilitySlice",
  initialState: utilitySliceInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUtilitySlice: (state: any, action: PayloadAction<Payload>) => {
      if (Object.keys(KEYS_OF_UTILITY_SLICE).includes(action.payload.key)) {
        state[action.payload.key] = action.payload.value;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearUtilitySlice: (state: any) => {
      state.snackBar = utilitySliceInitialState.snackBar;
    },
  },
});

export default utilitySlice.reducer;

export const { updateUtilitySlice, clearUtilitySlice } = utilitySlice.actions;
