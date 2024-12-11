import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {GET,POST,PUT,DELETE} from '../../shared/service/HTTP.Service'

const API_URL="http://localhost:8888/products";

export const fetchData=createAsyncThunk("api/fetchData",async () =>{
    //let response = await axios.get(API_URL);
    let response = await GET(API_URL);
    return response.data;
})

export const deleteData=createAsyncThunk("api/deleteData",async (id) =>{
    //await axios.delete(`${API_URL}/${id}`);
    await DELETE(`${API_URL}/${id}`);
    return id;

})

export const addData=createAsyncThunk("api/addData",async (newUser) =>{
    //let response=await axios.post(API_URL,newUser);
    let response=await POST(API_URL,newUser);
    return response.data;

})

export const editData=createAsyncThunk("api/editData",async (id,newUser) =>{
    //let response=await axios.put(`${API_URL}/${id}`,newUser);
    let response=await PUT(`${API_URL}/${id}`,newUser);
    return response.data;

})

const apiSlice = createSlice({
    name:"api",
    initialState:{
        data:[],
        status:"idle",  // "loading" || "success" || "failed"
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="success";
            state.data=action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })
        .addCase(deleteData.pending,(state)=>{
            state.status="loading"
        })
        .addCase(deleteData.fulfilled,(state,action)=>{
            state.status="success";
            state.data=action.payload;
        })
        .addCase(deleteData.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })
    }
})

export default apiSlice.reducer;