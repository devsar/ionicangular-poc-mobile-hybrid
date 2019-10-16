
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { Tab51Page } from '../tab5.1/tab51.page';
import { Tab52Page } from '../tab5.2/tab52.page';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements AfterViewInit {

  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  tab51Page = Tab51Page;
  tab52Page = Tab52Page;

  ngAfterViewInit() {
    console.log('Super tabs is ', this.superTabs);
    this.superTabs.selectTab(1);
  }

  constructor() {}

}
