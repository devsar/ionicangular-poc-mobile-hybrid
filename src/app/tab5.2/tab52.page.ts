import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab52',
  templateUrl: 'tab52.page.html',
  styleUrls: ['tab52.page.scss']
})
export class Tab52Page implements OnInit {
  contacts: any[] = [];
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.contacts.push({
        name: `Contact #${ i }`,
        phoneNumber: `647-555-5555`
      });
    }

  }

  ngOnInit() {
  }


}
