import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TProducts ={ id?: number , title: string , price: string ,cat_prefix: string, img:string}[];
const getProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix", async (prefix:string , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const products = await axios.get<TProducts>(`http://localhost:5000/products?cat_prefix=${prefix}`)
        console.log(products.data)
        return products.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message)   
        } else {
            return rejectWithValue("An unexpected error");
        }
    }
})

export default getProductsByCatPrefix;