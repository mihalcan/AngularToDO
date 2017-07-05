import { ToDo } from './../models/todo.model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class TodosService {
  private static todos: ToDo[] = [
    {id: 1, task: 'Learn angular', lastModified: new Date(), done: false},
    {id: 2, task: 'Learn RxJs', lastModified: new Date(), done: false},
    {id: 3, task: 'Listen to Andrei', lastModified: new Date(), done: true},
  ];

  private baseUrl = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAll(): Observable<ToDo[]> {
    return this.http.get(this.baseUrl)
      .do((response) => console.log(response.json()))
      .map((response) => response.json().data)
      .catch((err) => {
        console.log(err);
        return Observable.of([]);
      });
  }

  getBy(id: number): Observable<ToDo> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .map((response) => response.json().data)
      .catch((err) => {
        console.log(err);
        return Observable.of(null);
      });
  }

  delete(todo: ToDo): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${todo.id}`);
  }

  add(todo: ToDo): Observable<ToDo> {
    return this.http.post(this.baseUrl, JSON.stringify(todo), { headers: this.headers})
        .do((response) => console.log(response.json()))
        .map((response) => response.json().data);
  }

  update(todo: ToDo): Observable<ToDo> {
    return this.http.put(`${this.baseUrl}/${todo.id}`, JSON.stringify(todo), { headers: this.headers})
        .do((response) => console.log(response.json()))
        .map((response) => response.json().data);
  }

  search(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    return this.getAll().map((todos) =>
      todos.filter((value) =>  value.task.toLowerCase().indexOf(searchTerm) > -1)
    );
  }
}
