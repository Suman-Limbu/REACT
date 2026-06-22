import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const res = await axios.post("https://dummyjson.com/auth/login", data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export default login;
