import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userSlice from '../user/userSlice'




const middleware = [thunk];

const store = configureStore({
    reducer: {
        userLogin:userSlice.reducer
    },
    middleware: middleware
})

export const actions = userSlice.actions;

export default store;