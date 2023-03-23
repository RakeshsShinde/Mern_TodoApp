import { taskActions } from '../store/store'
import axios from 'axios';
const { task_list_start, task_list_success, task_list_fail } = taskActions

export const listTask = () => async (dispatch, getState) => {

    try {
        dispatch(task_list_start())

        const { userLogin: userInfo } = getState();

        const { data } = await axios.get('/tasks')



    } catch (error) {

    }
}