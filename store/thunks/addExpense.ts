import { API_END_POINTS } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import dayjs from "dayjs";

const addExpense = createAsyncThunk(
  "addExpense",
  async (isGroupExpense: boolean, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const userId = state.centralDataSlice.userId;
    const { expenseName, amount, category, paymentMethod, date } =
      state.expenseSlice.expenseDetails;

    const requestConfig = {
      method: "POST",
      url: `${process.env.API_URL}/${API_END_POINTS.ADD_EXPENSE}`,
      data: {
        userOrGroupId: userId,
        expenseName,
        amount: Number(amount),
        category,
        paymentMethod,
        date: dayjs(date).format("DD MMM YYYY"),
        isGroupExpense,
      },
    };

    try {
      const response = await axios(requestConfig);
      if (response.status === 201) {
        console.log("created");
      }
      return response.status;
    } catch (error) {
      console.log("Error", error);
    }
  }
);

export default addExpense;
