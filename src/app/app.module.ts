
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { TodosService } from './todos/services/todos.service';
import { AuthService } from './core/auth.service';
import { InMemoryTodoService } from './core/mocks/in-memory-todo.service';
import { AuthGuard } from './core/auth.guard';

import { ListTodosComponent } from 'app/todos/list-todos/list-todos.component';
import { ViewTodoComponent } from './todos/list-todos/view-todo.component';
import { DoneComponent } from './common/components/done/done.component';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ConfirmDirective } from './core/confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    DoneComponent,
    ViewTodoComponent,
    EditTodoComponent,
    NavComponent,
    LoginComponent,
    ConfirmDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoService, { delay: 500, apiBase: 'api/'}),
    RouterModule.forRoot([
      { path: '', component: ListTodosComponent, canActivate: [AuthGuard] },
      { path: 'list', component: ListTodosComponent },
      { path: 'login', component: LoginComponent },
      { path: 'edit/:id', component: EditTodoComponent },
      ])
  ],
  providers: [
    TodosService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
