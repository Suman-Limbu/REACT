import { createSlice } from "@reduxjs/toolkit";
import login from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(login.fulfilled, (state, action) => {
        ((state.loading = false), (state.user = action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
      });
  },
});

export default authSlice.reducer;
