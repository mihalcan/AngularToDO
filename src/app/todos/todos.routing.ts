import { FormCancelGuard } from './edit-todo/form-cancel.guard';
import { AuthGuard } from './../core/auth.guard';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ListTodosComponent } from 'app/todos/list-todos/list-todos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'list',
                component: ListTodosComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'edit/:id',
                component: EditTodoComponent,
                canActivate: [AuthGuard],
                canDeactivate: [FormCancelGuard]}
        ])
    ],
    exports: [RouterModule]
})
export class TodosRoutingModule {}
