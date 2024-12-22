import { API_END_POINTS, KEYS_OF_EXPENSE_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateExpenseSlice } from "../slices/expenseSlice";

const getUserExpenses = createAsyncThunk(
  "getUserExpenses",
  async (userId: string, thunkAPI) => {
    const requestConfig = {
      method: "GET",
      url: `${process.env.API_URL}/${API_END_POINTS.GET_USER_EXPENSES}/${userId}`,
    };
    try {
      const response = await axios(requestConfig);
      if (response.status === 200) {
        thunkAPI.dispatch(
          updateExpenseSlice({
            value: response.data.expenses,
            key: KEYS_OF_EXPENSE_SLICE.expensesList,
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export default getUserExpenses;
