import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-appointments.component.html'
})
export class MyAppointmentsComponent implements OnInit {

  appointments: any[] = [];

  constructor(private service: AppointmentService) {}

  ngOnInit() {
    this.service.getMyAppointments().subscribe((res: any) => {
      this.appointments = res;
    });
  }
}