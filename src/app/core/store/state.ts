import { User } from './../models/user.model';
import { ToDo } from './../../todos/models/todo.model';

export interface State {
    todos: ToDo[],
    user: User
}

export const initialState: State = {
    todos: [],
    user: { authenticated: false } as User
}
