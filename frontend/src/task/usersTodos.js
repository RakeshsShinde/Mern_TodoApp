import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],

}

const usersTodo = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todo_list_start(state, action) {
            return { loading: true }
        },
        todo_list_success(state, action) {
            return { loading: false, todos: action.payload }
        },
        todo_list_fail(state, action) {
            return { loading: false, error: action.payload }
        }
    }
})

export default usersTodo;