export const login=createAsyncThunk("auth/login",async(data,thunkApi)=>{
try{
const res=await axios.post("");
return res.data.user;
}cathc(err){
thunkApi.rejectWithValue.(err.message)
}
})