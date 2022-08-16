import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './Basics/basic/basic.component';
import {InteractionComponent} from "./Basics/Interaction/interacton.component"
import {NameChild} from "./Basics/NameChild/NameChild.component"


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    InteractionComponent,
    NameChild
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
