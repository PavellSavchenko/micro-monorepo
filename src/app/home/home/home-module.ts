import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import {UsersModule} from '../../modules/users/users/users.module';
import {ChatModule} from "../../modules/chat/chat/chat.module";



@NgModule({
  declarations: [
    Home
  ],
    imports: [
        CommonModule,
        UsersModule,
        ChatModule
    ]
})
export class HomeModule { }
