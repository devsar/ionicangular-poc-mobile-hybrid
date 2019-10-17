import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarperfilPage } from './editarperfil.page';
import { TopEditarperfilComponent } from 'src/app/components/top-editarperfil/top-editarperfil.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PickerController } from '@ionic/angular';




@NgModule({
  declarations: [EditarperfilPage, TopEditarperfilComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditarperfilModule { }
