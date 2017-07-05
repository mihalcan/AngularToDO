import { Router } from '@angular/router';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.login(formValues.userName, formValues.password);
    this.router.navigate(['/list']);
  }
}
