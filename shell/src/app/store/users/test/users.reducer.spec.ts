import {initialState, usersReducer, UsersState} from '../users.reducer';
import * as UsersActions from '../users.actions';
import {User} from '../users.models';

describe('UsersReducer', ()=>{
  const mockUser: User = { id: 1, name: 'Pavel', email: 'test@mail.com' };
  const anotherUser: User = { id: 2, name: 'Anna', email: 'test@mail.com' };

  it('should return initial state', () => {
    const action = { type: 'UNKNOWN'}
    const state = usersReducer(undefined, action)
    expect(state).toBe(initialState)
  });

  it('should set loading true on loadUsers', () => {
    const action = UsersActions.loadUsers()
    const state = usersReducer(initialState, action)
    expect(state.loading).toBeTrue()
    expect(state.errorMessage).toBe('')
  })
  it('should set loading true on loadUsers', () => {
    const action = UsersActions.loadUsers();
    const state = usersReducer(initialState, action);
    expect(state.loading).toBeTrue();
    expect(state.errorMessage).toBe('');
  });

  it('should populate users on loadUsersSuccess', () => {
    const users = [mockUser, anotherUser];
    const action = UsersActions.loadUsersSuccess({ users });
    const state = usersReducer({ ...initialState, loading: true }, action);
    expect(state.users).toEqual(users);
    expect(state.loading).toBeFalse();
  });

  it('should set errorMessage on loadUsersFail', () => {
    const action = UsersActions.loadUsersFail({ errorMessage: 'Failed to load' });
    const state = usersReducer({ ...initialState, loading: true }, action);
    expect(state.errorMessage).toBe('Failed to load');
    expect(state.loading).toBeFalse();
  });

  it('should set loading true on addUser', () => {
    const action = UsersActions.addUser(mockUser);
    const state = usersReducer(initialState, action);
    expect(state.loading).toBeTrue();
  });

  it('should add new user on addUserSuccess', () => {
    const action = UsersActions.addUserSuccess(mockUser);
    const state = usersReducer(initialState, action);
    expect(state.loading).toBeFalse();
  });

  it('should set error on addUserFail', () => {
    const action = UsersActions.addUserFail({ error: 'Add failed' });
    const state = usersReducer({ ...initialState, loading: true }, action);
    expect(state.errorMessage).toBe('Add failed');
    expect(state.loading).toBeFalse();
  });

  it('should set loading true on deleteUser', () => {
    const action = UsersActions.deleteUser({ id: 1, name: "Pavel", email: 'test@mail.com' });
    const state = usersReducer(initialState, action);
    expect(state.loading).toBeTrue();
  });

  it('should remove user on deleteUserSuccess', () => {
    const populatedState: UsersState = {
      ...initialState,
      users: [mockUser, anotherUser],
      loading: true
    };
    const action = UsersActions.deleteUserSuccess(mockUser);
    const state = usersReducer(populatedState, action);
    expect(state.users).not.toContain(mockUser);
    expect(state.loading).toBeFalse();
  });

  it('should set error on deleteUserFail', () => {
    const action = UsersActions.deleteUserFail({ errorMessage: 'Delete failed' });
    const state = usersReducer({ ...initialState, loading: true }, action);
    expect(state.errorMessage).toBe('Delete failed');
    expect(state.loading).toBeFalse();
  });

  it('should set loading true on updateUser', () => {
    const action = UsersActions.updateUser(mockUser);
    const state = usersReducer(initialState, action);
    expect(state.loading).toBeTrue();
  });

  it('should update user on updateUserSuccess', () => {
    const updatedUser: User = { id: 1, name: 'Updated Pavel', email: 'test@mail.com' };
    const populatedState: UsersState = {
      ...initialState,
      users: [mockUser, anotherUser],
      loading: true
    };
    const action = UsersActions.updateUserSuccess(updatedUser);
    const state = usersReducer(populatedState, action);
    expect(state.users.find(u => u.id === 1)?.name).toBe('Updated Pavel');
    expect(state.loading).toBeFalse();
  });
})
