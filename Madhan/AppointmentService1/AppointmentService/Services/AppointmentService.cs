namespace AppointmentService.Services  // ← Add this
{
    public class AppointmentService : IAppointmentService
    {
        private readonly AppDbContext _context;

        public AppointmentService(AppDbContext context)
        {
            _context = context;
        }

        public List<Doctor> GetDoctors()
        {
            return _context.Doctors.ToList();
        }

        public string BookAppointment(int userId, int doctorId, DateTime dateTime)
        {
            var appointment = new Appointment
            {
                UserId = userId,
                DoctorId = doctorId,
                DateTime = dateTime,
                Status = "Pending"
            };

            _context.Appointments.Add(appointment);
            _context.SaveChanges();

            return "Appointment Booked";
        }

        public List<Appointment> GetMyAppointments(int userId)
        {
            return _context.Appointments
                .Where(a => a.UserId == userId)
                .ToList();
        }
    }
}