import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout';

const routes: Routes = [
  {
    path: 'retiro',
    component: MainComponent,
    loadChildren: () => import('src/app/retiro/retiro.module').then(m => m.RetiroModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
