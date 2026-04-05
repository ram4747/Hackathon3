using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/admin")]
[Authorize]
public class AdminController : ControllerBase
{
    private readonly IAdminService _service;

    public AdminController(IAdminService service)
    {
        _service = service;
    }

    // GET ALL APPOINTMENTS
    [HttpGet("appointments")]
    public IActionResult GetAll()
    {
        return Ok(_service.GetAllAppointments());
    }

    // APPROVE
    [HttpPut("appointment/approve")]
    public IActionResult Approve(int id)
    {
        return Ok(_service.Approve(id));
    }

    // REJECT
    [HttpPut("appointment/reject")]
    public IActionResult Reject(int id)
    {
        return Ok(_service.Reject(id));
    }

    // COMPLETE
    [HttpPut("appointment/complete")]
    public IActionResult Complete(int id)
    {
        return Ok(_service.Complete(id));
    }
}