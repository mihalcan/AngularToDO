import { ToDo } from './../models/todo.model';
import { Http, XHRBackend, HttpModule, ResponseOptions, RequestMethod, Response, ResponseType } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  const httpMock = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TodosService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([TodosService, XHRBackend], (service: TodosService, mockBackend: MockBackend) => {
    expect(service).toBeTruthy();
  }));

  it('should get all todos from http service', inject([TodosService, XHRBackend], (service: TodosService, mockBackend: MockBackend) => {
    const mockResponse = [{id: 1, task: 'asdf', done: false}];
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual('api/todos');

      connection.mockRespond(new Response(new ResponseOptions({
        body: {data: mockResponse},
        status: 200
      })));
    });

    service.getAll().subscribe(result => {
      expect(result).toBe(mockResponse);
    });
  }));

  it('should log and return empty result when request is not successfull',
    inject([TodosService, XHRBackend], (service: TodosService, mockBackend: MockBackend) => {
      let loggedError: string;
      spyOn(console, 'log').and.callFake((msg) => { loggedError = msg; });
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError(new Error('Unexpected exception'));
      });

      service.getAll().subscribe(result => {
        expect(loggedError).toContain('error:');
        expect(result.length).toBe(0);
      });
  }));
});
