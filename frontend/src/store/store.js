import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userLoginSlice from '../user/userLoginSlice'
import userRegisterSlice from '../user/userRegisterSlice'
import EditTodoSlice from '../task/EditTodoSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import usersTodo from '../task/usersTodos'
import createTodoSlice from '../task/createTodoSlice'
const presistCofig = {
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers({
    userLogin: userLoginSlice.reducer,
    userRegister: userRegisterSlice.reducer,
    userTodos: usersTodo.reducer,
    createTodo: createTodoSlice.reducer,
    EditTodo: EditTodoSlice.reducer,
})

const persistedReducer = persistReducer(presistCofig, reducer)

const middleware = [thunk];

const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware
})

export const actions = userLoginSlice.actions;
export const userRegisterAction = userRegisterSlice.actions;
export const todoActions = usersTodo.actions;
export const createTodoAction = createTodoSlice.actions;
export const editTodoActions = EditTodoSlice.actions;
export default store;