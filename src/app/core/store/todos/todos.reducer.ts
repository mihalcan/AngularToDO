import { TodosAction } from './todos.action';
import { State, initialState } from './../state';
import { ActionReducer, Action } from '@ngrx/store';

export function todosReducer(state: State = initialState, action: Action) {
    console.log(action.type);

    switch (action.type) {
        case TodosAction.LOADED:
            return Object.assign({}, state, {
                todos: action.payload
            });
        case TodosAction.DELETE:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            });
        case TodosAction.ADD:
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            });
        case TodosAction.EDIT:
            const foundIdx = state.todos.findIndex(x => x.id === action.payload.id);
            if (foundIdx > 0) {
                Object.assign(state.todos[foundIdx], action.payload)
                return Object.assign({}, state, {
                    todos: state.todos
                });
            } else {
                return state;
            }
        default:
            return state;
    }
}
