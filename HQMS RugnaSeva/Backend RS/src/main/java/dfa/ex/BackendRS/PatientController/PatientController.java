package dfa.ex.BackendRS.PatientController;

import dfa.ex.BackendRS.Dto.AppointmentDTO;
import dfa.ex.BackendRS.Dto.LoginDTO;
import dfa.ex.BackendRS.Dto.PatientDTO;
import dfa.ex.BackendRS.Service.PatientService;
import dfa.ex.BackendRS.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("api/v1/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;


    @PostMapping(path = "/save")
    public String savePatient(@RequestBody PatientDTO patientDTO) {
        String id = patientService.addPatient(patientDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginPatient(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = patientService.loginPatient(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping(path = "/appointment")
    public String saveAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        String id = patientService.addAppointment(appointmentDTO);
        return id;
    }



}

