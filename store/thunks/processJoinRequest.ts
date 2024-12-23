import { API_END_POINTS, KEYS_OF_UTILITY_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateUtilitySlice } from "../slices/utilitySlice";
import { RootState } from "../store";

const processJoinRequests = createAsyncThunk(
  "processJoinRequests",
  async (
    { action, userId }: { action: "approve" | "delete"; userId: string },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as RootState;
    const groupId = state.groupExpenseSlice.groupCode;

    const requestConfig = {
      method: "PATCH",
      url: `${process.env.API_URL}/${API_END_POINTS.PROCESS_JOIN_REQUESTS}`,
      data: {
        action,
        userId,
        groupId: `group_${groupId}`,
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
    } catch (err: any) {
      thunkAPI.dispatch(
        updateUtilitySlice({
          key: KEYS_OF_UTILITY_SLICE.snackBar,
          value: {
            open: true,
            message: err.response?.data?.message,
            status: "error",
          },
        })
      );
    }
  }
);

export default processJoinRequests;
