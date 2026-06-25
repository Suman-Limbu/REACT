import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});


export default authSlice.reducer;
