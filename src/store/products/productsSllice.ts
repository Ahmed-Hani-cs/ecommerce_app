import { createSlice } from "@reduxjs/toolkit";
import getProductsByCatPrefix from "./thunk/getProductsByCatPrefix";

type TInitialState = {
    records:{ id: number , title: string , price: string ,cat_prefix: string, img:string}[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null, 
};

const initialState:TInitialState = {
    records:[],
    loading:'idle',
    error:null
};
const productsSllice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsCleanUp:(state)=>{
            state.records=[]
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(getProductsByCatPrefix.pending,(state)=>{
            state.loading = 'pending';
            state.error=null;
            state.records=[];
        })
        builder.addCase(getProductsByCatPrefix.fulfilled,(state,action)=>{
            state.loading="succeeded";
            state.records=action.payload;
            state.error=null;
        })
        builder.addCase(getProductsByCatPrefix.rejected,(state , action)=>{
            state.loading="failed";
            state.error=action.payload as string;
            state.records=[];
        })
    }
})

export  const {productsCleanUp} = productsSllice.actions;
export {getProductsByCatPrefix}
export default productsSllice.reducer;