import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Component1} from '../components/component1/1.component';
import {Component2} from "../components/component2/2.component";
import {GlobalService} from "../services/global.service";

@NgModule({
  bootstrap: [Component1, Component2],
  declarations: [Component1, Component2],
  imports: [BrowserModule],
  providers: [
      GlobalService
  ]
})
export class MainModule {}
