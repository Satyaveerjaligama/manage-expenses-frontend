import { API_END_POINTS, KEYS_OF_UTILITY_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { updateUtilitySlice } from "../slices/utilitySlice";

const createGroup = createAsyncThunk("createGroup", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const groupName = state.groupExpenseSlice.groupName;
  const userId = state.centralDataSlice.userId;

  const requestConfig = {
    method: "POST",
    url: `${process.env.API_URL}/${API_END_POINTS.CREATE_ACCOUNT}`,
    data: {
      groupName,
      adminId: userId,
    },
  };

  try {
    const response = await axios(requestConfig);
    if (response.status === 201) {
      thunkAPI.dispatch(
        updateUtilitySlice({
          key: KEYS_OF_UTILITY_SLICE.snackBar,
          value: {
            open: true,
            message: response.data?.message,
            status: "success",
          },
        })
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    thunkAPI.dispatch(
      updateUtilitySlice({
        key: KEYS_OF_UTILITY_SLICE.snackBar,
        value: {
          open: true,
          message: error.response?.data?.message,
          status: "error",
        },
      })
    );
  }
});

export default createGroup;
