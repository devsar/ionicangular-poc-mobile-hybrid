import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { IgPostComponent } from '../components/ig-post/ig-post.component';

import { FetchApiService } from '../services/fetch-api.service';
import { TopbarSharedModule } from '../modules/topbar-shared/topbar-shared.module';
import { IgPostFakeComponent } from '../components/ig-post-fake/ig-post-fake.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    TopbarSharedModule
  ],
  providers: [FetchApiService],
  declarations: [Tab1Page, IgPostComponent, IgPostFakeComponent]
})
export class Tab1PageModule {}
