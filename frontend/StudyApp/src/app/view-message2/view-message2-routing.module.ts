import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMessage2Page } from './view-message2.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMessage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMessage2PageRoutingModule {}
