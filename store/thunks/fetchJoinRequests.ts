import {
  API_END_POINTS,
  KEYS_OF_GROUP_EXPENSE_SLICE,
  KEYS_OF_UTILITY_SLICE,
} from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateGroupExpenseSlice } from "../slices/groupExpenseSlice";
import { updateUtilitySlice } from "../slices/utilitySlice";

const fetchJoinRequests = createAsyncThunk(
  "fetchJoinRequests",
  async (groupId: string, thunkAPI) => {
    const requestConfig = {
      method: "GET",
      url: `${process.env.API_URL}/${API_END_POINTS.FETCH_JOIN_REQUESTS}/group_${groupId}`,
    };
    try {
      const response = await axios(requestConfig);
      if (response.status === 200) {
        thunkAPI.dispatch(
          updateGroupExpenseSlice({
            value: response.data.requests,
            key: KEYS_OF_GROUP_EXPENSE_SLICE.groupJoiningRequestsList,
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

export default fetchJoinRequests;
