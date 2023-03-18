import { actions, userRegisterAction } from '../store/store'

import axios from 'axios';

const { user_login_start, user_login_success, user_login_fail, user_logout } = actions;
const { user_register_start, user_register_success, user_register_fail } = userRegisterAction
export const login = (email, password) => async (dispatch) => {

    try {

        dispatch(user_login_start());


        const config = {
            header: {
                'Content-type': "application/json"
            }
        }

        const { data } = await axios.post('/users/login', {
            email,
            password,
        }, config)


        const { other } = data;
        localStorage.setItem("userInfo", JSON.stringify(other));
        dispatch(user_login_success(other))




    } catch (error) {
        dispatch(user_login_fail(error.response.data));
    }
}


export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch(user_logout())
}


export const register = (Firstname, Lastname, email, password, pic) => async (dispatch) => {

    try {
        dispatch(user_register_start())

        const config = {
            header: {
                "Content-type": "application/json",
            }
        }


        const { data } = await axios.post('/users/register', {
            Firstname,
            Lastname,
            email,
            password,
            profilepic: pic.url.toString(),



        }, config)

        dispatch(user_register_success(data));





    } catch (error) {
        dispatch(user_register_fail(error.response.data))
    }
}