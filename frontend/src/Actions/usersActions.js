import { actions } from '../store/store'
import axios from 'axios';
const { user_login_start, user_login_success, user_login_fail, user_logout } = actions;
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
        dispatch(user_login_success(other))
        localStorage.setItem("userInfo", JSON.stringify(other));



    } catch (error) {
        dispatch(user_login_fail(error.response.data));
    }
}


export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch(user_logout())
}