import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab52Page } from './tab52.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [Tab52Page],
  entryComponents: [Tab52Page],
  exports: [Tab52Page]
})
export class Tab52PageModule { }
