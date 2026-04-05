public interface IAdminService
{
    List<Appointment> GetAllAppointments();
    string Approve(int appointmentId);
    string Reject(int appointmentId);
    string Complete(int appointmentId);
}