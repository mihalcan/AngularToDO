import { ConfirmDirective } from './../../core/confirm.directive';
import { ToDo } from './../models/todo.model';
import { DonePipe } from './done.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoComponent } from './view-todo.component';

describe('ViewTodoComponent', () => {
  let component: ViewTodoComponent;
  let fixture: ComponentFixture<ViewTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTodoComponent, DonePipe, ConfirmDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodoComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    component.todo = { id: 1, task: 'test task', done: true } as ToDo;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not show edit button when task is done', () => {
    component.todo = { id: 1, task: 'test task', done: true } as ToDo;
    fixture.detectChanges();
    const foundButtons = getAllByText(fixture.debugElement.nativeElement, 'button', 'Edit');
    expect(foundButtons.length).toBeFalsy();
  });

  it('should raise event when Delete button is clicked', () => {
    component.todo = { id: 1, task: 'test task', done: true } as ToDo;
    spyOn(component.delete, 'emit');
    fixture.detectChanges();

    const btn = getAllByText(fixture.debugElement.nativeElement, 'button', 'Delete')[0] as HTMLElement;
    btn.dispatchEvent(new Event('click'));

    expect(component.delete.emit).toHaveBeenCalledWith(component.todo);
  });

  it('should raise event when Edit button is clicked', () => {
    component.todo = { id: 1, task: 'test task', done: false } as ToDo;
    spyOn(component.edit, 'emit');
    fixture.detectChanges();

    const btn = getAllByText(fixture.debugElement.nativeElement, 'button', 'Edit')[0] as HTMLElement;
    btn.dispatchEvent(new Event('click'));

    expect(component.edit.emit).toHaveBeenCalledWith(component.todo);
  });

  function getAllByText(element, selector, text) {
    const elements = element.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(el){
      return RegExp(text).test(el.textContent);
    });
  }
});
