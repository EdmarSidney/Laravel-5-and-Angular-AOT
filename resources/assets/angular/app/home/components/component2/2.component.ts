import { Component } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'component2',
  templateUrl: 'component2.html',
    styleUrls: ['./component2.scss']
})
export class Component2 {
    constructor(public global: GlobalService) {}

    showPSecond() {
        this.global.click = true;
    }
}
