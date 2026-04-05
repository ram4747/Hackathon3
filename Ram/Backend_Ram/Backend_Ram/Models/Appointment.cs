public class Appointment
{
    public int AppointmentId { get; set; }
    public int UserId { get; set; }
    public int DoctorId { get; set; }
    public DateTime DateTime { get; set; }
    public string Status { get; set; } = "Pending";
}