import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './Basics/basic/basic.component';
import {InteractionComponent} from "./Basics/Interaction/interacton.component"
import {NameChild} from "./Basics/NameChild/nameChild.component"
import {LifeCycle} from "./Basics/LifeCycle/LifeCycle.component"
import {VersionParentComponent} from "./Basics/version/version.component"
import {VersionChildComponent} from "./Basics/version/version-child/versionChild.component"
import { TempBasicComponent } from './Templates/Basic/basic.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    InteractionComponent,
    NameChild,
    LifeCycle,
    VersionParentComponent,
    VersionChildComponent,
    TempBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
