import { createSlice } from '@reduxjs/toolkit'


const userLoginSlice = createSlice({
    name: 'user',
    initialState: {

    },
    reducers: {
        user_login_start(state, action) {
            return { loading: true }
        },

        user_login_success(state, action) {
            return { loading: false, userInfo: action.payload }
        },

        user_login_fail(state, action) {
            return { loading: false, error: action.payload }
        },

        user_logout(state, action) {
            return {};
        }


    }
})


export default userLoginSlice;
