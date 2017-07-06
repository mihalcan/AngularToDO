import { EditTodoComponent } from './edit-todo.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormCancelGuard implements CanDeactivate<EditTodoComponent> {
  confirmMessage = 'Are you sure want to leave? All your changes will be lost.';

  canDeactivate(
    component: EditTodoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (component.editForm.dirty) {
      return window.confirm(this.confirmMessage);
    }

    return true;
  }
}
