import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetiroComponent } from './retiro/retiro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleItemComponent } from './rectangle-item/rectangle-item.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';

const routes: Routes = [
  {
    path: '',
    component: RetiroComponent
  },
  {
    path: 'exito',
    component: SuccessScreenComponent
  }
];


@NgModule({
  declarations: [
    RetiroComponent,
    RectangleItemComponent,
    SuccessScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RetiroModule { }
