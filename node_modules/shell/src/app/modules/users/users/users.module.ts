import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {StoreModule} from '@ngrx/store';
import {usersReducer} from '../../../store/users/users.reducer';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from '../../../store/users/users.effects';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {UserModalComponent} from './user-modal/user-modal.component';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';



@NgModule({
  declarations: [
    UsersComponent,
    UserModalComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatButtonModule,
    MatCardAvatar,
    MatProgressSpinner,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatDialogTitle,
    MatLabel,
    ReactiveFormsModule,
    MatInput
  ]
})
export class UsersModule { }
