import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Driver} from './driver.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
  ) { }

  driverForm: FormGroup  = new FormGroup<any>({});

  ngOnInit(): void {
    this.initForm();
  }

  initForm(driver: Driver = new Driver()): void {
   this.driverForm = this.fb.group({
    id: driver.id,
    surname: driver.surname,
    name: driver.name,
    birthDate: driver.birthDate,
     email: driver.email,
    active: driver.active,
     vehicleId: driver.vehicleId,
   });
  }


}
