import { ToDo } from './../models/todo.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-todo',
  template: `
    <span>{{todo.task}}</span>
    <app-done [done]="todo.done"></app-done>
    <button class="btn btn-default btn-xs pull-right ml-10" (click)="onDelete()">
        <i class="glyphicon glyphicon-remove"></i>
        Delete
    </button>
    <button class="btn btn-default btn-xs pull-right ml-10" (click)="onEdit()" *ngIf="!todo.done">
        <i class="glyphicon glyphicon-edit"></i>
        Edit
    </button>`,
  styles: [`
    .ml-10 {
      margin-left: 10px;
    }
  `]
})
export class ViewTodoComponent {
  @Input() todo: ToDo;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  onEdit() {
    this.edit.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo);
  }
}
