import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entry } from './entry/entry';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    Entry
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: Entry}])
  ]
})
export class RemoteEntryModule { }
