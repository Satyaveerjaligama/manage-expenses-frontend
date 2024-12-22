import { API_END_POINTS, KEYS_OF_UTILITY_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { updateUtilitySlice } from "../slices/utilitySlice";

const updateGroup = createAsyncThunk("updateGroup", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const { groupName, groupCode } = state.groupExpenseSlice;

  const requestConfig = {
    method: "PATCH",
    url: `${process.env.API_URL}/${API_END_POINTS.UPDATE_GROUP}/${groupCode}`,
    data: {
      groupName,
    },
  };

  try {
    const response = await axios(requestConfig);
    if (response.status === 200) {
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
    return response.status;
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

export default updateGroup;
