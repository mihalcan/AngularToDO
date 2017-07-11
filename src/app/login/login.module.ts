import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
