import axios from 'axios';
import { createTodoAction } from '../store/store';

const { todo_create_start, todo_create_success, todo_create_fail } = createTodoAction;

export const createtodo = (title, description, category, date, time, status) => async (dispatch) => {

    try {
        dispatch(todo_create_start())
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post('/task/create',
            { title, description, category, date, time, status },
            config)


        dispatch(todo_create_success(data))

    } catch (error) {
        dispatch(todo_create_fail(error.response.data))
    }
}