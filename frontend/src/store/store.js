import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userLoginSlice from '../user/userLoginSlice'
import userRegisterSlice from '../user/userRegisterSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../task/taskSlice'
import createTaskSlice from '../task/createTaskSlice'
const presistCofig = {
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers({
    userLogin: userLoginSlice.reducer,
    userRegister: userRegisterSlice.reducer,
    userTasks: todoSlice.reducer,
    createTask: createTaskSlice.reducer,
})

const persistedReducer = persistReducer(presistCofig, reducer)

const middleware = [thunk];

const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware
})

export const actions = userLoginSlice.actions;
export const userRegisterAction = userRegisterSlice.actions;
export const todoActions = todoSlice.actions;
export const createTodoAction = createTaskSlice.actions;
export default store;