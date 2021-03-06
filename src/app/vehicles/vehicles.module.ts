import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: VehiclesComponent },
]

@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class VehiclesModule { }
