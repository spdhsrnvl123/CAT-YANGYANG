import { configureStore, createSlice } from "@reduxjs/toolkit";

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers : {
        setList(state,action){
            state.push(action.payload)
        },
        deleteList(state,action){
            state.splice(action.payload,1)
        }
    }
})

export let { setList, deleteList } = list.actions

export default configureStore({
    reducer : { 
        name : list.reducer
    }
})