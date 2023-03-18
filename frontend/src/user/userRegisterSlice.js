import { createSlice } from '@reduxjs/toolkit'

const userRegisterSlice = createSlice({
    name: 'userRegister',
    initialState: {

    },

    reducers: {
        user_register_start(state, action) {
            return { loading: true }
        },
        user_register_success(state, action) {
            return { loading: false, RegiterInfo: action.payload }
        },
        user_register_fail(state, action) {
            return { loading: false, error: action.payload }
        }
    }



})

export default userRegisterSlice;
