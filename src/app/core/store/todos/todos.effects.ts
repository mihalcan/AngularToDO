import { ToDo } from './../../../todos/models/todo.model';
import { TodosAction, LoadedAction, DeletedAction, UpdatedAction, AddedAction } from './todos.action';
import { TodosService } from './../../../todos/services/todos.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

@Injectable()
export class TodosEffects {
    @Effect()
    todos$ = this.actions$
                .ofType(TodosAction.TRIGGER_LOAD)
                .switchMap(() => this.todosService.getAll())
                .map(data => new LoadedAction(data));

    @Effect()
    delete$ = this.actions$
                .ofType(TodosAction.TRIGGER_DELETE)
                .switchMap((action) => this.todosService.delete(action.payload))
                .map((deletedId: number) => new DeletedAction(deletedId));

    @Effect()
    edit$ = this.actions$
                .ofType(TodosAction.TRIGGER_EDIT)
                .switchMap((action) => {
                    console.log(action);
                    return this.todosService.update(action.payload);
                })
                .map((updatedTodo) => new UpdatedAction(updatedTodo));

    @Effect()
    add$ = this.actions$
                .ofType(TodosAction.TRIGGER_ADD)
                .switchMap((action) => this.todosService.add(action.payload))
                .map((addedTodo) => new AddedAction(addedTodo));

    constructor(private actions$: Actions, private todosService: TodosService) {}
}
