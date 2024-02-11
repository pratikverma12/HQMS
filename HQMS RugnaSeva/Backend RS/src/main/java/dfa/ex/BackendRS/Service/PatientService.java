package dfa.ex.BackendRS.Service;

import dfa.ex.BackendRS.Dto.AppointmentDTO;
import dfa.ex.BackendRS.Dto.LoginDTO;
import dfa.ex.BackendRS.Dto.PatientDTO;
import dfa.ex.BackendRS.response.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface PatientService {

    String addPatient(PatientDTO patientDTO);

    LoginResponse loginPatient(LoginDTO loginDTO);

    String addAppointment(AppointmentDTO appointmentDTO);

}
