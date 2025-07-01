import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUsers, selectUsersLoading} from '../../../store/users/users.selectors';
import {Observable} from 'rxjs';
import {CreateUser, User} from '../../../store/users/users.models';
import {addUser, deleteUser, loadUsers, updateUser} from '../../../store/users/users.actions';
import {MatDialog} from '@angular/material/dialog';
import {UserModalComponent} from './user-modal/user-modal.component';
import { EventBusService } from '@shared/event-bus';
import {SocketService} from '../../../services/socket.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]> | undefined
  usersCount = 0
  loading$: Observable<boolean> | undefined
  constructor(private store: Store, private dialog: MatDialog, private bus: EventBusService, private socketService: SocketService,) {
  }

  ngOnInit() {
    this.users$ = this.store.select(selectUsers)
    this.users$.subscribe((users)=>{
      this.usersCount = users.length
      this.bus.emit({ type: 'users:count', payload: { userCount: this.usersCount} });
    })
    this.loading$ = this.store.select(selectUsersLoading)
    this.store.dispatch(loadUsers())
    this.socketService.onMessage((message)=>{
      console.log(message)
    })
  }

  trackById(index: number, user: User) {
    return user.id
  }

  addUser(){
    this.dialog.open(UserModalComponent).afterClosed().subscribe((result: CreateUser) => {
      if(result){
        this.store.dispatch(addUser(result))
        this.bus.addLog(`[NGRX:ADD] ${result.name}`)
      }
    })
  }

  updateUserHandler(user: User){
    this.dialog.open(UserModalComponent, {data: user}).afterClosed().subscribe((result: CreateUser) => {
      if(result){
        this.store.dispatch(updateUser({
          id: user.id,
          name: result.name,
          email: result.email
        }))
        this.bus.addLog(`[NGRX:UPDATE] ${user.name}`)
      }
    })

  }

  deleteUserHandler(user: User){
    this.store.dispatch(deleteUser(user))
    this.bus.addLog(`[NGRX:DELETE] ID=${user.id}`)
  }
}
