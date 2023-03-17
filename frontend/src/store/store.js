import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userSlice from '../user/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'


const presistCofig = {
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers({
    userLogin: userSlice.reducer
})

const persistedReducer = persistReducer(presistCofig, reducer)





const middleware = [thunk];

const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware
})

export const actions = userSlice.actions;

export default store;