import { User } from './../core/models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../core/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserStore } from 'app/core/store/user/user.store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() title: string;
  userName: string;
  isAuthenticated = false;
  private subscription: Subscription;

  constructor(private store: UserStore) {
  }

  ngOnInit(): void {
    this.subscription = this.store.getCurrentUser().subscribe((user) => {
      this.isAuthenticated = user.authenticated;
      this.userName = user.userName;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
