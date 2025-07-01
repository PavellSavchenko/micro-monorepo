import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  loadUsers,
  loadUsersSuccess,
  updateUser, updateUserSuccess
} from './users.actions';
import { switchMap, of, delay, map } from 'rxjs';
import { User } from './users.models';

@Injectable()
export class UsersEffects {
  actions = inject(Actions)

  constructor() {}

  loadUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadUsers),
      switchMap(() =>
        of([
          { id: 1, name: 'Alice', email: 'alice@example.com' },
          { id: 2, name: 'Bob', email: 'bob@example.com' },
          { id: 3, name: 'Dunkan', email: 'awaaa@example.com' },
        ] as User[]).pipe(
          delay(0),
          map(users => loadUsersSuccess({ users }))
        )
      )
    )
  );
  addUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(addUser),
      delay(1000),
      map(( user ) => addUserSuccess({
        id: Math.random(),
        name: user.name,
        email: user.email
      }))
    )
  );
  updateUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(updateUser),
      delay(1000),
      map((user) => updateUserSuccess( user ))
    )
  );
  deleteUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(deleteUser),
      delay(1000),
      map(( user ) => deleteUserSuccess(user))
    )
  );
}
