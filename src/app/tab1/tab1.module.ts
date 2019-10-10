import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { IgPostComponent } from '../components/ig-post/ig-post.component';
import { TopbarComponent } from '../components/topbar/topbar.component';

import { FetchApiService } from "../services/fetch-api.service";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  providers: [FetchApiService],
  declarations: [Tab1Page, IgPostComponent, TopbarComponent]
})
export class Tab1PageModule {}
