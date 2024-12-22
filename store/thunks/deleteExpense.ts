import { API_END_POINTS, KEYS_OF_UTILITY_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateUtilitySlice } from "../slices/utilitySlice";

const deleteExpense = createAsyncThunk(
  "deleteExpense",
  async (expenseId: string, thunkAPI) => {
    const requestConfig = {
      method: "DELETE",
      url: `${process.env.API_URL}/${API_END_POINTS.DELETE_EXPENSE}/${expenseId}`,
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

export default deleteExpense;
