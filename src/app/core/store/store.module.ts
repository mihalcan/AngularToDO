import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TodosStore } from './todos/todos.store';
import { TodosEffects } from './todos/todos.effects';
import { UserStore } from './user/user.store';
import { UserEffects } from 'app/core/store/user/user.effects';
import { userReducer } from 'app/core/store/user/user.reducer';
import { todosReducer } from 'app/core/store/todos/todos.reducer';

@NgModule({
    imports: [
        StoreModule.provideStore({
            user: userReducer,
            todos: todosReducer
        }),
        EffectsModule.run(UserEffects),
        EffectsModule.run(TodosEffects),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 10
        })
    ],
    providers: [
        UserStore,
        TodosStore
    ]
})
export class AppStoreModule {}
