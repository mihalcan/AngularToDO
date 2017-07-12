import { TodosAction } from './todos.action';
import { ToDo } from './../../../todos/models/todo.model';
import { Observable } from 'rxjs/Observable';
import { State } from './../state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
@Injectable()
export class TodosStore {
    constructor(private store: Store<State>) {}

    loadTodos() {
        this.store.dispatch({type: TodosAction.TRIGGER_LOAD});
    }

    search(searchTerm: string) {
        searchTerm = searchTerm.toLowerCase();
        return this.store.select('todos').map((state: State) =>
            state.todos.filter((value) =>  value.task.toLowerCase().indexOf(searchTerm) > -1));
    }

    getBy(id: number): Observable<ToDo> {
        return this.store.select('todos').map((state: State) =>
            state.todos.find(x => x.id === id));
    }

    delete(toDo: ToDo) {
        this.store.dispatch({type: TodosAction.TRIGGER_DELETE, payload: toDo})
    }

    edit(todo: ToDo) {
        this.store.dispatch({type: TodosAction.TRIGGER_EDIT, payload: todo});
    }

    add(todo: ToDo) {
        this.store.dispatch({type: TodosAction.TRIGGER_ADD, payload: todo});
    }
}
