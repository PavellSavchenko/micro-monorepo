import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatToolbarRow} from '@angular/material/toolbar';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {StoreModule} from '@ngrx/store';
import {UsersModule} from './modules/users/users/users.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ChatModule} from './modules/chat/chat/chat.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSlideToggle,
    MatToolbarRow,
    MatTabGroup,
    MatTab,
    UsersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([EffectsModule]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    ChatModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
