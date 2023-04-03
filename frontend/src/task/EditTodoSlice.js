import { createSlice } from '@reduxjs/toolkit'


const initialValue = {

}
const EditTodoTask = createSlice({
    name: 'editTodo',
    initialState: initialValue,
    reducers: {
        todo_edit_start: (state, action) => {
            return { loading: true }
        },
        todo_edit_success: (state, action) => {
            return { loading: false, success: true }
        },
        todo_edit_fail: (state, action) => {
            return { laoding: false, error: action.payload, success: false }
        }
    }
})

export default EditTodoTask;