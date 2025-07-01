import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RemoteEntryModule } from './remote-entry/remote-entry-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
