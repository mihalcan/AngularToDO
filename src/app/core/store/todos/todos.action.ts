import { ToDo } from './../../../todos/models/todo.model';
import { Action } from '@ngrx/store';
export const TodosAction = {
    TRIGGER_LOAD: '__ trigger load todos',
    LOADED: '__ todos loaded',
    TRIGGER_DELETE: '__ trigger delete',
    DELETE: '__ delete',
    TRIGGER_EDIT: '__ trigger edit',
    EDIT: '__ edit',
    TRIGGER_ADD: '__ trigger add',
    ADD: '__ add'
}

export class LoadedAction implements Action {
    readonly type = TodosAction.LOADED;
    constructor(public payload: ToDo[]) {}
}

export class DeletedAction implements Action {
    readonly type = TodosAction.DELETE;
    constructor(public payload: number) {}
}

export class UpdatedAction implements Action {
    readonly type = TodosAction.EDIT;
    constructor(public payload: ToDo) {}
}

export class AddedAction implements Action {
    readonly type = TodosAction.ADD;
    constructor(public payload: ToDo) {}
}
