import { removeTodoActions } from '../store/store';
import axios from 'axios'
const { todo_delete_start, todo_delete_success, todo_delete_fail } = removeTodoActions
export const removeTodo = (id) => async (dispatch) => {
    try {
        dispatch(todo_delete_start());

        await axios.delete(`task/${id}`);

        dispatch(todo_delete_success())
    } catch (error) {
        dispatch(todo_delete_fail(error.response?.data))
    }
}
