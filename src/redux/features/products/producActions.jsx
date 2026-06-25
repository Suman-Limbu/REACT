import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts=createAsyncThunk("/products/getProducts",async(_,thunkApi)=>{
    try{
        const res=await axios.get("https://dummyjson.com/products");
        console.log(res.data.products)
        return res.data.products;
    }catch(err){
thunkApi.rejectWithValue(err.message)
    }
})