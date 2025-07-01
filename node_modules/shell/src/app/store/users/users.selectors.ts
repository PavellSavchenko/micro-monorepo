import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from './users.reducer';

export const selectUsersFeature = createFeatureSelector<UsersState>('users')

export const selectUsers = createSelector(selectUsersFeature,
  state => state.users)

export const selectUsersLoading = createSelector(selectUsersFeature, state => state.loading)

export const selectUsersError = createSelector(selectUsersFeature, state => state.errorMessage)
