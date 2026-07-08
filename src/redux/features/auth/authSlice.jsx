import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
  name:"auth",
  intitalState:{
    user:{}
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(login.Pending,()=>{

    })
  }
})