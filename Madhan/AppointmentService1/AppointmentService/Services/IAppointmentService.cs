namespace AppointmentService.Services
{
    public interface IAppointmentService
    {
        List<Doctor> GetDoctors();
        string BookAppointment(int userId, int doctorId, DateTime dateTime);
        List<Appointment> GetMyAppointments(int userId);
    }
}