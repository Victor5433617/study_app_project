import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessage2Page } from './view-message2.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessage2PageRoutingModule } from './view-message2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessage2PageRoutingModule
  ],
  declarations: [ViewMessage2Page]
})
export class ViewMessage2PageModule {}
