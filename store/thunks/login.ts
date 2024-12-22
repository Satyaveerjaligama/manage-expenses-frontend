import { API_END_POINTS } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { routes } from "@/utils/routes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const login = createAsyncThunk("login", async (router: any, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const { emailOrPhoneNumber, password } = state.centralDataSlice;
  const requestConfig = {
    method: "POST",
    url: `${process.env.API_URL}/${API_END_POINTS.login}`,
    data: {
      emailOrPhoneNumber,
      password,
    },
  };

  try {
    const response = await axios(requestConfig);
    if (response.status === 200) {
      router.push(routes.home);
    }
  } catch (error) {
    console.log("Error", error);
  }
});

export default login;
