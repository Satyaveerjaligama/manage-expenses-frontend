import { API_END_POINTS, KEYS_OF_CENTRAL_DATA_SLICE } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { routes } from "@/utils/routes";
import { updateCentralDataSlice } from "../slices/centralDataSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const login = createAsyncThunk("login", async (router: any, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const { emailOrPhoneNumber, password } = state.centralDataSlice;
  const requestConfig = {
    method: "POST",
    url: `${process.env.API_URL}/${API_END_POINTS.LOGIN}`,
    data: {
      emailOrPhoneNumber,
      password,
    },
  };

  try {
    const response = await axios(requestConfig);
    if (response.status === 200) {
      thunkAPI.dispatch(
        updateCentralDataSlice({
          key: KEYS_OF_CENTRAL_DATA_SLICE.userId,
          value: response.data?.userId,
        })
      );
      router.push(routes.home);
    }
  } catch (error) {
    console.log("Error", error);
  }
});

export default login;
