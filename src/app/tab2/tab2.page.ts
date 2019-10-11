import { Component } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  tapear() {
    console.log("tapeado");
  }

  onHammer() {
    console.log("jamoneado");
  }

}
