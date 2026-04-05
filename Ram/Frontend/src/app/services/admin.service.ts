import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Appointment {
  appointmentId: number;
  userId: number;
  doctorId: number;
  dateTime: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `${this.apiUrl}/admin/appointments`,
      { headers: this.getHeaders() }
    );
  }

  approveAppointment(id: number): Observable<string> {
    return this.http.put(
      `${this.apiUrl}/admin/appointment/approve?id=${id}`,
      {},
      { headers: this.getHeaders(), responseType: 'text' }
    );
  }

  rejectAppointment(id: number): Observable<string> {
    return this.http.put(
      `${this.apiUrl}/admin/appointment/reject?id=${id}`,
      {},
      { headers: this.getHeaders(), responseType: 'text' }
    );
  }

  completeAppointment(id: number): Observable<string> {
    return this.http.put(
      `${this.apiUrl}/admin/appointment/complete?id=${id}`,
      {},
      { headers: this.getHeaders(), responseType: 'text' }
    );
  }
}