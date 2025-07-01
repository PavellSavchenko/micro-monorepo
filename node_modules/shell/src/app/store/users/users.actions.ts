import { createAction, props } from '@ngrx/store';
import {CreateUser, User} from './users.models';

export const loadUsers = createAction('[Users] Load users');
export const loadUsersSuccess = createAction('[Users] Load users success', props<{users: User[]}>());
export const loadUsersFail = createAction('[Users] Load users fail', props<{errorMessage: string}>());
export const addUser = createAction('[Users] Add user', props<CreateUser>());
export const addUserSuccess = createAction('[Users] Add user success', props<User>());
export const addUserFail = createAction('[Users] Add user fail', props<{error: string}>());
export const deleteUser = createAction('[Users] Delete user', props<User>());
export const deleteUserSuccess = createAction('[Users] Delete user success', props<User>());
export const deleteUserFail = createAction('[Users] Delete user fail', props<{errorMessage: string}>());
export const updateUser = createAction('[Users] Update user', props<User>());
export const updateUserSuccess = createAction('[Users] Update user success', props<User>());
export const updateUserFail = createAction('[Users] Update user fail', props<{error: string}>());
