import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entry } from './entry/entry';
import {RouterModule} from '@angular/router';
import {UserModule} from './entry/modules/user/user.module';
import {ChatModule} from "./entry/modules/chat/chat.module";



@NgModule({
  declarations: [
    Entry
  ],
    imports: [
        UserModule,
        CommonModule,
        RouterModule.forChild([{path: '', component: Entry}]),
        ChatModule
    ]
})
export class RemoteEntryModule { }
