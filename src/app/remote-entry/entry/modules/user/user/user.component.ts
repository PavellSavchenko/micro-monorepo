import {Component, inject, OnInit} from '@angular/core';
import {UsersStore} from '../../../../store/users/users.store';
import {CreateUser, User} from '../../../../store/users/users.model';
import {MatDialog} from '@angular/material/dialog';
import {UserModalComponent} from './user-modal/user-modal.component';
import {EventBusService} from '@shared/event-bus';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  store = inject(UsersStore);

  constructor(private dialog: MatDialog, private bus: EventBusService) {
  }
  ngOnInit() {
    this.store.loadUsers()
  }

  handleUpdate(user: User){
    this.dialog.open(UserModalComponent, {data: user}).afterClosed().subscribe((result: CreateUser) => {
      if(result){
        this.store.updateUser({
          id: user.id,
          email: result.email,
          name: result.name
        })
        this.bus.addLog(`[NGRX Signal Store:UPDATE] ${user.name}`)

      }
    })
  }

  deleteUserHandler(user: User){
    this.store.deleteUser(user.id)
    this.bus.addLog(`[NGRX Signal Store:DELETE] ID=${user.id}`)
  }

  addUser(){
    this.dialog.open(UserModalComponent).afterClosed().subscribe((result: CreateUser) => {
      if(result){
        this.store.addUser(result)
        this.bus.addLog(`[NGRX Signal Store:ADD] ${result.name}`)
      }
    })
  }
}
