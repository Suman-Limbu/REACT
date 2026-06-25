import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("/auth/login", async (data, thunkApi) => {
  try {
    const res = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      data,
      {
        withCredentials: true,
      },
    );
    console.log(res);
    return res;
  } catch (err) {
    thunkApi.rejectWithValue(err.message);
  }
});
