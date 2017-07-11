import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { TodosModule } from './todos/todos.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    TodosModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
