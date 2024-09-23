import { createSlice } from '@reduxjs/toolkit'
import getAllCategories from './thunk/thunkGetCategories'

interface ICategories{
    records:{id:number ,title:string , prefix:string , img:string}[],
    loading:'idle' | 'pending' | 'succeeded' | 'failed',
    error:string | null,
}
const initialState:ICategories = {
    records:[],
    loading:'idle',
    error:null
};


const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCategories.pending,(state)=>{
            state.records= [] ;
            state.loading = 'pending';
            state.error= null;
        })
        builder.addCase(getAllCategories.fulfilled,(state , action)=>{
            state.records= action.payload ;
            state.loading = 'succeeded';
            state.error= null;
        })
        builder.addCase(getAllCategories.rejected,(state , action)=>{
            state.loading = 'failed';
            if(action.payload && typeof action.payload== "string"){
                state.error= action.payload;
            }
            state.records= [] ;
        })
    }
})

export { getAllCategories}
export default categoriesSlice.reducer;