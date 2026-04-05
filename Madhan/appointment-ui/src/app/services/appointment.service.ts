import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  api = 'https://localhost:7094/api';

  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get(`${this.api}/doctor`);
  }

  bookAppointment(data: any) {
    return this.http.post(`${this.api}/appointment/book`, data);
  }

  getMyAppointments() {
    return this.http.get(`${this.api}/appointment/my`);
  }
}