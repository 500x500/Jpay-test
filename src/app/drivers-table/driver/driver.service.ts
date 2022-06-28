import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Driver} from './driver.model';
import {Observable} from 'rxjs';

@Injectable()
export class DriverService {
  constructor(private http: HttpClient) {
  }

  getDriver(driver: Driver): Observable<Driver> {
    return this.http.get<Driver>('http://localhost:3000/driver');
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>('http://localhost:3000/driver', driver);
  }

  updateDriver(driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`http://localhost:3000/driver/${driver.id}`, driver);
  }

  deleteDriver(driver: Driver): Observable<Driver> {
    return this.http.delete<Driver>(`http://localhost:3000/driver/${driver.id}`);
  }
}
