import { ToDo } from './../../todos/models/todo.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryTodoService implements InMemoryDbService {
  createDb() {
    const todos: ToDo[] = [
      {id: 1, task: 'Learn angular', done: false},
      {id: 2, task: 'Learn RxJs', done: false},
      {id: 3, task: 'Listen to Andrei', done: true},
    ];
    return {todos};
  }
}
