import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalonGebetanPage } from './calon-gebetan.page';

const routes: Routes = [
  {
    path: '',
    component: CalonGebetanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalonGebetanPage]
})
export class CalonGebetanPageModule {}
