import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calon-gebetan', pathMatch: 'full' },
  { path: 'calon-gebetan', loadChildren: './calon-gebetan/calon-gebetan.module#CalonGebetanPageModule' },
  { path: 'target-gebetan', loadChildren: './target-gebetan/target-gebetan.module#TargetGebetanPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
