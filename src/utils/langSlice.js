import { createSlice } from "@reduxjs/toolkit";


const langSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changelang: (state,action)=>{
            state.lang=action.payload;
        }
    }
})

export const {changelang} = langSlice.actions;

export default langSlice.reducer;
