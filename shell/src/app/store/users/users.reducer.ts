import {User} from './users.models';
import {createReducer, on} from '@ngrx/store';
import * as UsersActions from './users.actions';

export interface UsersState {
  users: User[];
  loading: boolean;
  errorMessage: string
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  errorMessage: ''
}

export const usersReducer = createReducer(initialState,
    on(UsersActions.loadUsers, state =>({
      ...state,
      loading: true,
      errorMessage: ''
    })),
    on(UsersActions.loadUsersSuccess, (state, {users}) => ({
      ...state,
      users: users,
      loading: false
    })),
    on(UsersActions.loadUsersFail, (state, {errorMessage}) => ({
      ...state,
      errorMessage: errorMessage,
      loading: false
    })),
    on(UsersActions.addUser, (state, user)=>({
      ...state,
      loading: true
    })),
    on(UsersActions.addUserSuccess, (state, user)=>({
      ...state,
      users: state.users.concat(user),
      loading: false
    })),
    on(UsersActions.addUserFail, (state, {error}) => ({
      ...state,
      loading: false,
      errorMessage: error
    })),
    on(UsersActions.deleteUser, (state, {id})=>({
      ...state,
      loading: true,
    })),
    on(UsersActions.deleteUserSuccess, (state, user)=>({
      ...state,
      loading: false,
      users: state.users.filter(prevUser => prevUser.id !== user.id)
    })),
    on(UsersActions.deleteUserFail, (state, error) => ({
      ...state,
      loading: false,
      errorMessage: error.errorMessage
    })),
    on(UsersActions.updateUser, (state, user)=>({
      ...state,
      loading: true
    })),
    on(UsersActions.updateUserSuccess, (state, user)=>({
      ...state,
      users: state.users.map((prevUser)=>prevUser.id===user.id?user:prevUser),
      loading: false
    })),
    on(UsersActions.addUserFail, (state, {error}) => ({
      ...state,
      loading: false,
      errorMessage: error
    })),
  )
