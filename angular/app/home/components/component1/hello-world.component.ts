import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.template.html'
})
export class HelloWorldComponent {
  constructor() {
    console.log(document.querySelector('hello-world-app').innerHTML);
  }



}
