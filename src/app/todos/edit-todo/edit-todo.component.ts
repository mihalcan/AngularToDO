import { TodosStore } from './../../core/store/todos/todos.store';
import { ToDo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  task: FormControl = new FormControl('', Validators.required);
  editForm: FormGroup = this.fb.group({
      task: this.task,
      done: '',
      id: NaN
  })
  private ALREADY_EXISTS = 'AlreadyExists';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosStore: TodosStore,
    private fb: FormBuilder) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if (!isNaN(id)) {
      this.todosStore.getBy(id)
        .subscribe((result) => this.editForm.patchValue({
          task: result.task,
          done: result.done,
          id: id
        }));
    } else {
      this.task.setValidators([Validators.required, this.todoExists()])
    }
  }

  save(todoToSave: ToDo) {
    if (this.editForm.valid) {
      if (isNaN(todoToSave.id)) {
        this.todosStore.add(todoToSave);
      } else {
        this.todosStore.edit(todoToSave);
      }

      this.router.navigate(['/todos/list']);
    }
  }

  cancel() {
    this.router.navigate(['/todos/list']);
  }

  todoExists() {
    return (control: FormControl): { [key: string]: any } => {
      if (!!control.value) {
        const ctrlValue = control.value.toLowerCase();
        return null;
        // return service.getAll().some((value) => value.task.toLowerCase() === ctrlValue)
        //   ? { ALREADY_EXISTS: 'Specified task already exists' }
        //   : null;
      }
    }
  }
}
