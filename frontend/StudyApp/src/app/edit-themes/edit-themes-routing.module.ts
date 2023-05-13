import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditThemesPage as EditThemesPage } from './edit-themes.page';

const routes: Routes = [
  {
    path: '',
    component: EditThemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditThemesPageRoutingModule {}
