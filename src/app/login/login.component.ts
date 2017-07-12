import { Subscription } from 'rxjs/Subscription';
import { UserStore } from './../core/store/user/user.store';
import { Router } from '@angular/router';
import { AuthService } from './../core/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(
    private userStore: UserStore,
    private router: Router) { }

  login(formValues) {
    // this.authService.login(formValues.userName, formValues.password);
    this.subscription = this.userStore.authenticate(formValues).subscribe( _ =>
      this.router.navigate(['todos/list'])
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
