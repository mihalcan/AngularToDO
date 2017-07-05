import { TodosService } from './../services/todos.service';
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
  todos: ToDo[];

  constructor(
    private router: Router,
    private todosService: TodosService ) { }

  ngOnInit() {
    this.searchGroup = new FormGroup({
      search: new FormControl()
    });

    this.searchGroup.controls.search.valueChanges
      .debounceTime(300)
      .do((searchTerm) => console.log(searchTerm))
      .map((searchTerm) => searchTerm.trim())
      .subscribe((searchTerm) => this.searchByName(searchTerm));

    this.getAvailableTodos();
  }

  onEdit(todo: ToDo) {
    this.router.navigate(['/edit', todo.id]);
  }

  onDelete(todo: ToDo) {
    this.todosService.delete(todo)
      .subscribe((_) => this.getAvailableTodos());
  }

  onAdd() {
    this.router.navigate(['/edit', 'new']);
  }

  private getAvailableTodos() {
    const searchTerm = this.searchGroup.controls.search.value;
    this.searchByName(searchTerm === null ? '' : searchTerm);
  }

  private searchByName(searchTerm: string) {
    this.todosService.search(searchTerm).subscribe((result) => this.todos = result);
  }
}
