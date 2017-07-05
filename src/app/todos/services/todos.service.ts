import { ToDo } from './../models/todo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  private static todos: ToDo[] = [
    {id: 1, task: 'Learn angular', lastModified: new Date(), done: false},
    {id: 2, task: 'Learn RxJs', lastModified: new Date(), done: false},
    {id: 3, task: 'Listen to Andrei', lastModified: new Date(), done: true},
  ];

  getAll(): ToDo[] {
    return TodosService.todos;
  }

  getBy(id: number): ToDo {
    return TodosService.todos.find((value) => value.id === id)
  }

  delete(todo: ToDo) {
    TodosService.todos = TodosService.todos.filter((value) =>  value.id !== todo.id);
  }

  addOrUpdate(todo: ToDo) {
    const found = this.getBy(todo.id);
    if (!!found) {
      Object.assign(found, todo);
    } else {
      TodosService.todos.push(todo);
    }
  }

  search(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    return TodosService.todos.filter((value) =>  value.task.toLowerCase().indexOf(searchTerm) > -1);
  }
}
