import { ToDo } from './../../todos/models/todo.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryTodoService implements InMemoryDbService {
  createDb() {
    const todos: ToDo[] = [
      {id: 1, task: 'Learn angular', lastModified: new Date(), done: false},
      {id: 2, task: 'Learn RxJs', lastModified: new Date(), done: false},
      {id: 3, task: 'Listen to Andrei', lastModified: new Date(), done: true},
    ];
    return {todos};
  }
}
