import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { TopbarPerfilComponent } from '../components/topbar-perfil/topbar-perfil.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }]),
  ],
  declarations: [Tab5Page, TopbarPerfilComponent]
})
export class Tab5PageModule { }
