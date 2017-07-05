import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done',
  template: `
    <span *ngIf="done" class="label label-success">
      <i class="glyphicon glyphicon-check"></i>
    </span>
  `
})
export class DoneComponent implements OnInit {
  @Input() done: boolean;

  constructor() { }

  ngOnInit() {

  }

}
