import { HttpModule } from '@angular/http';
import { InMemoryTodoService } from './mocks/in-memory-todo.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ConfirmDirective } from './confirm.directive';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryTodoService, { delay: 500, apiBase: 'api/'}),
    ],
    declarations: [
        ConfirmDirective
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    exports: [
        ConfirmDirective
    ]
})
export class CoreModule { }
