using Microsoft.AspNetCore.Mvc;
using AppointmentService.Services;  // ← Add this

[ApiController]
[Route("api/[controller]")]
public class DoctorController : ControllerBase
{
    private readonly IAppointmentService _service;

    public DoctorController(IAppointmentService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetDoctors()
        => Ok(_service.GetDoctors());
}