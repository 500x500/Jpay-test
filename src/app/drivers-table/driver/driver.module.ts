import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: ':id', component: DriverComponent },
]

@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ]
})
export class DriverModule { }
