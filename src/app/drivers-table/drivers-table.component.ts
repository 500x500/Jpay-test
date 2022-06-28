import { Component, OnInit } from '@angular/core';
import {Data} from '../../../server/JITpay Angular Taskdb';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  dataSource = Data.drivers;

  Drivers = Data.drivers;

  displayedColumns: string[] = ['actions', 'active', 'surname', 'name', 'birthDate', 'email'];

  ngOnInit(): void {
  }

  addDriver() {
    this.router.navigate(['driver', 0], {relativeTo: this.route});
  }

  editDriver(element: any): void {
    this.router.navigate(['driver', element.id], {relativeTo: this.route});
  }

}
