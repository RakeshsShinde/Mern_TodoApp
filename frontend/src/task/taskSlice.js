import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],


}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        task_list_start(state, action) {
            return { loading: true }
        },
        task_list_success(state, action) {
            return { loading: false, tasks: action.payload }
        },
        task_list_fail(state, action) {
            return { loading: false, error: action.payload }
        }

    }
})

export default taskSlice;