using AppointmentService.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AppointmentController : ControllerBase
{
    private readonly IAppointmentService _service;

    public AppointmentController(IAppointmentService service)  // ← use interface
    {
        _service = service;
    }

    [HttpGet("doctors")]
    public IActionResult GetDoctors() => Ok(_service.GetDoctors());

    [HttpPost("book")]
    public IActionResult Book(int userId, int doctorId, DateTime dateTime)
        => Ok(_service.BookAppointment(userId, doctorId, dateTime));

    [HttpGet("my/{userId}")]
    public IActionResult GetMy(int userId)
        => Ok(_service.GetMyAppointments(userId));
}