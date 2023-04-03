import axios from 'axios';
import { editTodoActions } from '../store/store';
const { todo_edit_start, todo_edit_success, todo_edit_fail } = editTodoActions
export const editTodos = (id, title, decscription, type, status) => async (dispatch) => {
    try {
        dispatch(todo_edit_start());

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.put(`/task/${id}`
            , { title, decscription, type, status }, config);

        dispatch(todo_edit_success(data));
    } catch (error) {
        dispatch(todo_edit_fail(error.reponse.data))
    }
}