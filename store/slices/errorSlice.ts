import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "./centralDataSlice";
import { KEYS_OF_ERROR_SLICE } from "@/utils/constants";

interface ErrorSlice {
  loginErrors: {
    emailOrPhoneNumber: string;
    password: string;
  };
  signupErrors: {
    userName: string;
    emailOrPhoneNumber: string;
    password: string;
    confirmPassword: string;
  };
  expenseErrors: {
    expenseName: string;
    amount: string;
    category: string;
    paymentMethod: string;
    paymentType: string;
    date: string;
  };
  createGroupErrors: {
    groupName: string;
  };
  joinGroupErrors: {
    groupCode: string;
  };
  addAmountErrors: {
    amount: string;
  };
}

export const errorSliceInitialState: ErrorSlice = {
  loginErrors: {
    emailOrPhoneNumber: "",
    password: "",
  },
  signupErrors: {
    userName: "",
    emailOrPhoneNumber: "",
    password: "",
    confirmPassword: "",
  },
  expenseErrors: {
    expenseName: "",
    amount: "",
    category: "",
    paymentMethod: "",
    paymentType: "",
    date: "",
  },
  createGroupErrors: {
    groupName: "",
  },
  joinGroupErrors: {
    groupCode: "",
  },
  addAmountErrors: {
    amount: "",
  },
};

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: errorSliceInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateErrorSlice: (state: any, action: PayloadAction<Payload>) => {
      if (Object.keys(KEYS_OF_ERROR_SLICE).includes(action.payload.key)) {
        state[action?.payload?.key] = action.payload.value;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearErrorSlice: (state: any) => {
      state.loginErrors = errorSliceInitialState.loginErrors;
      state.signupErrors = errorSliceInitialState.signupErrors;
      state.expenseErrors = errorSliceInitialState.expenseErrors;
      state.createGroupErrors = errorSliceInitialState.createGroupErrors;
      state.joinGroupErrors = errorSliceInitialState.joinGroupErrors;
      state.addAmountErrors = errorSliceInitialState.addAmountErrors;
    },
  },
});

export default errorSlice.reducer;

export const { updateErrorSlice, clearErrorSlice } = errorSlice.actions;
