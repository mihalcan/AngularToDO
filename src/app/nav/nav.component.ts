import { AuthService } from './../core/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent{
  @Input() title: string;

  constructor(private auth: AuthService) { }

}
