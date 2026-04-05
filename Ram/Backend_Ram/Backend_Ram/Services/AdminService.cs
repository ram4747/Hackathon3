public class AdminService : IAdminService
{
    private readonly AppDbContext _context;

    public AdminService(AppDbContext context)
    {
        _context = context;
    }

    public List<Appointment> GetAllAppointments()
    {
        return _context.Appointments.ToList();
    }

    public string Approve(int appointmentId)
    {
        var appt = _context.Appointments.Find(appointmentId);
        if (appt == null) return "Not Found";

        appt.Status = "Approved";
        _context.SaveChanges();
        return "Approved";
    }

    public string Reject(int appointmentId)
    {
        var appt = _context.Appointments.Find(appointmentId);
        if (appt == null) return "Not Found";

        appt.Status = "Rejected";
        _context.SaveChanges();
        return "Rejected";
    }

    public string Complete(int appointmentId)
    {
        var appt = _context.Appointments.Find(appointmentId);
        if (appt == null) return "Not Found";

        appt.Status = "Completed";
        _context.SaveChanges();
        return "Completed";
    }
}