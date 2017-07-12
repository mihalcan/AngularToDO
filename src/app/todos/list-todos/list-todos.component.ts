import { Observable } from 'rxjs/Observable';
import { TodosStore } from './../../core/store/todos/todos.store';
import { ToDo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  searchGroup: FormGroup;
  filteredTodos$: Observable<ToDo[]>;

  constructor(
    private router: Router,
    private todosStore: TodosStore ) { }

  ngOnInit() {
    this.searchGroup = new FormGroup({
      search: new FormControl()
    });

    this.searchGroup.controls.search.valueChanges
      .debounceTime(300)
      .map((searchTerm) => searchTerm.trim())
      .subscribe((searchTerm) => this.searchByName(searchTerm));

    this.todosStore.loadTodos();
    this.getAvailableTodos();
  }

  onEdit(todo: ToDo) {
    this.router.navigate(['/todos/edit', todo.id]);
  }

  onDelete(todo: ToDo) {
    this.todosStore.delete(todo);
  }

  onAdd() {
    this.router.navigate(['/todos/edit', 'new']);
  }

  private getAvailableTodos() {
    const searchTerm = this.searchGroup.controls.search.value;
    this.searchByName(searchTerm === null ? '' : searchTerm);
  }

  private searchByName(searchTerm: string) {
    this.filteredTodos$ = this.todosStore.search(searchTerm);
  }
}
