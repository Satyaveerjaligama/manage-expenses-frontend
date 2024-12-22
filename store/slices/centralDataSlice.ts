import { KEYS_OF_CENTRAL_DATA_SLICE } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Payload {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

interface CentralDataSlice {
  userName: string;
  emailOrPhoneNumber: string;
  password: string;
  confirmPassword: string;
  userId: string;
}

export const centralDataSliceInitialState: CentralDataSlice = {
  userName: "",
  emailOrPhoneNumber: "",
  password: "",
  confirmPassword: "",
  userId: "",
};

const centralDataSlice = createSlice({
  name: "centralDataSlice",
  initialState: centralDataSliceInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateCentralDataSlice: (state: any, action: PayloadAction<Payload>) => {
      if (
        Object.keys(KEYS_OF_CENTRAL_DATA_SLICE).includes(action.payload.key)
      ) {
        state[action?.payload?.key] = action.payload.value;
      }
    },
  },
});

export default centralDataSlice.reducer;

export const { updateCentralDataSlice } = centralDataSlice.actions;
