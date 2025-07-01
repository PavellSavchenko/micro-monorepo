import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../../store/users/users.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SocketService} from '../../../../services/socket.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['user-modal.component.scss']
})

export class UserModalComponent {
  form: FormGroup;
  isEdit = false
  constructor(private dialogRef: MatDialogRef<UserModalComponent>,
              private socketService: SocketService,
              @Inject(MAT_DIALOG_DATA) public data: User, private fb: FormBuilder) {
    if(data){
      this.isEdit = true
    }
    this.form = this.fb.group({
      name: [this.data?.name||'', [Validators.required]],
      email: [this.data?.email||'', [Validators.required, Validators.email]],
    });
  }

  onClose() {
    this.dialogRef.close()
  }

  createUser(){
    this.socketService.sendMessage(this.form.value.name)
    this.dialogRef.close(this.form.value)
  }
}
