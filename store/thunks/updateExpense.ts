import { API_END_POINTS, KEYS_OF_UTILITY_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import dayjs from "dayjs";
import { updateUtilitySlice } from "../slices/utilitySlice";

const updateExpense = createAsyncThunk(
  "updateExpense",
  async (expenseId: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { expenseName, amount, category, paymentMethod, date } =
      state.expenseSlice.expenseDetails;

    const requestConfig = {
      method: "PATCH",
      url: `${process.env.API_URL}/${API_END_POINTS.UPDATE_EXPENSE}/${expenseId}`,
      data: {
        expenseName,
        amount: Number(amount),
        category,
        paymentMethod,
        date: dayjs(date).format("DD MMM YYYY"),
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
  }
);

export default updateExpense;
