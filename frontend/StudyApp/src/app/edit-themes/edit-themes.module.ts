import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditThemesPage as EditThemesPage } from './edit-themes.page';

import { IonicModule } from '@ionic/angular';

import { EditThemesPageRoutingModule as EditThemesPageRoutingModule } from './edit-themes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditThemesPageRoutingModule
  ],
  declarations: [EditThemesPage]
})
export class EditThemesPageModule {}
