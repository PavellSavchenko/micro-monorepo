import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import { UserComponent } from './user/user.component';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {UsersStore} from '../../../store/users/users.store';
import {UserModalComponent} from './user/user-modal/user-modal.component';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';



@NgModule({
  declarations: [
    UserComponent,
    UserModalComponent
  ],
  exports: [
    UserComponent
  ],
  providers: [UsersStore],
  imports: [
    CommonModule,
    AsyncPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    MatDialogActions,
    MatFormField,
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogTitle,
    MatInput,
    MatLabel
  ]
})
export class UserModule { }
