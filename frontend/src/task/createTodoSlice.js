import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    error: null,
    success: false,
};

const createTodoSlice = createSlice({
    name: 'createTodo',
    initialState,
    reducers: {
        todo_create_start(state, action) {
            return { loading: true }
        },
        todo_create_success(state, action) {
            return { loading: false, success: true }
        },
        todo_create_fail(state, action) {
            return { loading: false, error: action.payload }
        }
    }


})

export default createTodoSlice;