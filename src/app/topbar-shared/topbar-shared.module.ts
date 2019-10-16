import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../components/topbar/topbar.component';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [TopbarComponent],
})
export class TopbarSharedModule { }
