import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { LoginComponent } from './login/login.component';
import { ListTodosComponent } from 'app/todos/list-todos/list-todos.component';
import { AuthGuard } from './core/auth.guard';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormCancelGuard } from 'app/todos/edit-todo/form-cancel.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'todos/list', pathMatch: 'full'},
      { path: 'todos', loadChildren: 'app/todos/todos.module#TodosModule' },
      { path: 'login', component: LoginComponent }
     ], { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
