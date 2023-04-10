import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    success: false,
    error: null,
}
const deleteTodoSlice = createSlice({
    name: 'deleteTodo',
    initialState,
    reducers: {
        todo_delete_start: () => {
            return { loading: true }
        }
        ,
        todo_delete_success: () => {
            return { loading: false, success: true }
        },
        todo_delete_fail: (state, action) => {
            return { laoding: false, error: action.payload, success: false }
        }
    }

})


export default deleteTodoSlice;