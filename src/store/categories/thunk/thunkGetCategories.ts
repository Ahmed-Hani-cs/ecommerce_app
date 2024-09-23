import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {id:number ,title:string , prefix:string , img:string}[];
const getAllCategories = createAsyncThunk("categories/getCategories",async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.get<TResponse>("http://localhost:5000/categories")
        return res.data
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message)
        }else{
            return rejectWithValue("Un Expected Error")
        }
    }
})


export default getAllCategories;