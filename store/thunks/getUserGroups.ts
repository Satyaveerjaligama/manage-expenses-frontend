import { API_END_POINTS, KEYS_OF_GROUP_EXPENSE_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateGroupExpenseSlice } from "../slices/groupExpenseSlice";

const getUserGroups = createAsyncThunk(
  "getUserGroups",
  async (userId: string, thunkAPI) => {
    const requestConfig = {
      method: "GET",
      url: `${process.env.API_URL}/${API_END_POINTS.GET_USER_GROUPS}/${userId}`,
    };
    try {
      const response = await axios(requestConfig);
      if (response.status === 200) {
        thunkAPI.dispatch(
          updateGroupExpenseSlice({
            value: response.data.groups,
            key: KEYS_OF_GROUP_EXPENSE_SLICE.groupsList,
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export default getUserGroups;
