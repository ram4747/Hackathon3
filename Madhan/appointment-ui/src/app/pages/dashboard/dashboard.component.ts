import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  doctors: any[] = [];
  selectedDoctorId = '';
  selectedDateTime = '';
  message = '';

  constructor(private service: AppointmentService) {}

  ngOnInit() {
    this.service.getDoctors().subscribe((res: any) => {
      this.doctors = res;
    });
  }

  book() {
    const data = {
      doctorId: this.selectedDoctorId,
      dateTime: this.selectedDateTime
    };
    this.service.bookAppointment(data).subscribe(() => {
      this.message = 'Booked Successfully ✅';
    });
  }
}