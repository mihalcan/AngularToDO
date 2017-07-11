import { TodosRoutingModule } from './todos.routing';
import { CoreModule } from './../core/core.module';
import { FormCancelGuard } from './edit-todo/form-cancel.guard';
import { HttpModule } from '@angular/http';
import { TodosService } from './services/todos.service';
import { DonePipe } from './list-todos/done.pipe';
import { ViewTodoComponent } from './list-todos/view-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ListTodosComponent } from 'app/todos/list-todos/list-todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TodosRoutingModule,
    CoreModule
  ],
  declarations: [
    ListTodosComponent,
    ViewTodoComponent,
    EditTodoComponent,
    DonePipe
  ],
  providers: [
    TodosService,
    FormCancelGuard
  ]
})
export class TodosModule { }
