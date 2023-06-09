import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserEditPage } from './user-edit.page';

import { IonicModule } from '@ionic/angular';

import { UserEditPageRoutingModule } from './user-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEditPageRoutingModule
  ],
  declarations: [UserEditPage]
})
export class UserEditPageModule {}
