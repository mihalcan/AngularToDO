import { TodosService } from './../services/todos.service';
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
    private todosService: TodosService,
    private fb: FormBuilder) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if (!isNaN(id)) {
      this.todosService.getBy(id)
        .subscribe((result) => this.editForm.patchValue({
          task: result.task,
          done: result.done,
          id: id
        }));
    } else {
      this.task.setValidators([Validators.required, this.todoExists(this.todosService)])
    }
  }

  save(todoToSave: ToDo) {
    if (this.editForm.valid) {
      if (isNaN(todoToSave.id)) {
        this.todosService.add(todoToSave)
          .subscribe((result) => console.log(result));
        this.router.navigate(['/list']);
      } else {
        this.todosService.update(todoToSave)
          .subscribe((result) => console.log(result));
        this.router.navigate(['/list']);
      }
    }
  }

  cancel() {
    this.router.navigate(['/list']);
  }

  todoExists(service: TodosService) {
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
