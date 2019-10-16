import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { TopbarPerfilComponent } from '../components/topbar-perfil/topbar-perfil.component';
import { TopPerfilComponent } from '../components/top-perfil/top-perfil.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { Tab51PageModule } from '../tab5.1/tab51.module';
import { Tab52PageModule } from '../tab5.2/tab52.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SuperTabsModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }]),
    Tab51PageModule,
    Tab52PageModule
  ],
  declarations: [Tab5Page, TopbarPerfilComponent, TopPerfilComponent, PerfilComponent]
})
export class Tab5PageModule { }
