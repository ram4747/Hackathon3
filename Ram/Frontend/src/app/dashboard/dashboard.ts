import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService, Appointment } from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  appointments: Appointment[] = [];
  message: string = '';
  loading: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.loading = true;
    this.adminService.getAllAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        this.loading = false;
      },
      error: (err) => {
        this.message = '❌ Failed to load. Check your token.';
        this.loading = false;
      }
    });
  }

  approve(id: number): void {
    this.adminService.approveAppointment(id).subscribe({
      next: () => {
        this.message = `✅ Appointment ${id} Approved`;
        this.loadAppointments();
      },
      error: () => this.message = '❌ Approve failed'
    });
  }

  reject(id: number): void {
    this.adminService.rejectAppointment(id).subscribe({
      next: () => {
        this.message = `🚫 Appointment ${id} Rejected`;
        this.loadAppointments();
      },
      error: () => this.message = '❌ Reject failed'
    });
  }

  complete(id: number): void {
    this.adminService.completeAppointment(id).subscribe({
      next: () => {
        this.message = `✔️ Appointment ${id} Completed`;
        this.loadAppointments();
      },
      error: () => this.message = '❌ Complete failed'
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Approved': return 'badge-approved';
      case 'Rejected': return 'badge-rejected';
      case 'Completed': return 'badge-completed';
      default: return 'badge-pending';
    }
  }
}