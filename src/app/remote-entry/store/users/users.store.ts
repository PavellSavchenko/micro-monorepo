import { inject } from '@angular/core';
import { signalStore, withState, withMethods } from '@ngrx/signals';
import { patchState } from '@ngrx/signals';
import { User } from './users.model';
import {UserApi} from './users.api';

type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const UsersStore = signalStore(
  withState(initialState),

  withMethods((store, api = inject(UserApi)) => ({
    async loadUsers() {
      patchState(store, { loading: true });
      try {
        const users = await api.getUsers().toPromise();
        patchState(store, { users, loading: false });
      } catch {
        patchState(store, { error: 'Failed to load users', loading: false });
      }
    },

    async addUser(user: Omit<User, 'id'>) {
      patchState(store, { loading: true });
      try {
        const newUser = await api.addUser(user).toPromise();
        if(newUser)
        patchState(store, {
          users: [...store.users(), newUser],
          loading: false,
        });
      } catch {
        patchState(store, { error: 'Failed to add user', loading: false });
      }
    },

    async updateUser(user: User) {
      patchState(store, { loading: true });
      try {
        const updated = await api.updateUser(user).toPromise();
        if(updated)
        patchState(store, {
          users: store.users().map(u => u.id === updated.id ? updated : u),
          loading: false,
        });
      } catch {
        patchState(store, { error: 'Failed to update user', loading: false });
      }
    },

    async deleteUser(id: number) {
      patchState(store, { loading: true });
      try {
        await api.deleteUser(id).toPromise();
        patchState(store, {
          users: store.users().filter(u => u.id !== id),
          loading: false,
        });
      } catch {
        patchState(store, { error: 'Failed to delete user', loading: false });
      }
    },
  }))
);
