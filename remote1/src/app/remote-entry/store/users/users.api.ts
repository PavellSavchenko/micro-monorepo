import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import {User} from './users.model';

@Injectable({ providedIn: 'root' })
export class UserApi {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
  ];

  getUsers() {
    return of([...this.users]).pipe(delay(1000));
  }

  addUser(user: Omit<User, 'id'>) {
    const newUser = { ...user, id: Date.now() };
    this.users.push(newUser);
    return of(newUser).pipe(delay(1000));
  }

  updateUser(updated: User) {
    this.users = this.users.map(u => u.id === updated.id ? updated : u);
    return of(updated).pipe(delay(1000));
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
    return of(id).pipe(delay(1000));
  }
}
