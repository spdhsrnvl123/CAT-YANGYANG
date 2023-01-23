import { configureStore, createSlice } from "@reduxjs/toolkit";

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers : {
        setList(state,action){
            // state.age += 1;
            state = [...state,action.payload]
        },
    }
})

export let { setList } = list.actions

export default configureStore({
    reducer : { 
        name : list.reducer
    }
})