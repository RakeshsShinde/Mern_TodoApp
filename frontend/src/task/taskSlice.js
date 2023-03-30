import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],

}

const todoSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        todo_list_start(state, action) {
            return { loading: true }
        },
        todo_list_success(state, action) {
            return { loading: false, tasks: action.payload }
        },
        todo_list_fail(state, action) {
            return { loading: false, error: action.payload }
        }
    }
})

export default todoSlice;