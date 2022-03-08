import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { options } from '../common/otherApi/rapidApi'
//import { useDispatch } from 'react-redux';



var axios = require("axios").default;

//asynchronous call or export of asynchronous action. You do not need to import the action constants
//or dispatch any action here
export const fetchaAsynchData = createAsyncThunk('sample/fetchAsynchData',async () => {
    const response =await axios.request(options)
    return response.data
});

//initial state
const initialState = {
  value: {},
}

//slice creation which technically is a reducer descriping what happens to a state after an action. the action 
//constants is created along side with the reducer unlike the old way where you have to import the action 
//into the reducer
const sampleSlice = createSlice({
    name:'sample',
    initialState,
    reducers:{
        getData : (state, {payload})=>{
            state.value = payload
        },
    },
    extraReducers: {
        [fetchaAsynchData.pending] : () =>{
            console.log('pending')
        },
        [fetchaAsynchData.fulfilled] : (state, {payload}) =>{
            console.log('fetched successfully')
            return {...state, value:payload}
        },
        [fetchaAsynchData.rejected] : () =>{
            console.log('rejected')
        }
    }

});


//action export
export const getAlldata =  state =>state.sample.value



export default sampleSlice.reducer;