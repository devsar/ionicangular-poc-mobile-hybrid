import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { TopbarSharedModule } from '../modules/topbar-shared/topbar-shared.module';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    TopbarSharedModule,
  ],
  declarations: [Tab3Page],
  providers: [Camera]
})
export class Tab3PageModule {}
