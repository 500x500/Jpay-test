import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversTableComponent } from './drivers-table.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {DriverService} from './driver/driver.service';

const routes: Routes = [
  { path: '', component: DriversTableComponent,
    children:
     [ { path: 'driver', loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)}]
  },
]

@NgModule({
  declarations: [
    DriversTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [
    DriverService
  ]
})
export class DriversTableModule { }
