import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab51Page } from './tab51.page';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [Tab51Page],
  entryComponents: [Tab51Page],
  exports: [Tab51Page]
})
export class Tab51PageModule { }
