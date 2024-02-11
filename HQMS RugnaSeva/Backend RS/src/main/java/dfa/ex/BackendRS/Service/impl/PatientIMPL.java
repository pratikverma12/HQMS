package dfa.ex.BackendRS.Service.impl;

import dfa.ex.BackendRS.Dto.AppointmentDTO;
import dfa.ex.BackendRS.Dto.LoginDTO;
import dfa.ex.BackendRS.Dto.PatientDTO;
import dfa.ex.BackendRS.Entity.Appointment;
import dfa.ex.BackendRS.Entity.Patient;
import dfa.ex.BackendRS.Repo.AppointmentRepo;
import dfa.ex.BackendRS.Repo.PatientRepo;
import dfa.ex.BackendRS.Service.PatientService;
import dfa.ex.BackendRS.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PatientIMPL implements PatientService {

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addPatient(PatientDTO patientDTO) {
        Patient patient = new Patient(
                patientDTO.getPatientid(),
                patientDTO.getFname(),
                patientDTO.getLname(),
                patientDTO.getContact(),
                patientDTO.getEmail(),


                this.passwordEncoder.encode(patientDTO.getPassword())

        );

        patientRepo.save(patient);
        return patient.getFname();
    }
    PatientDTO patientDTO;

    @Override
    public LoginResponse loginPatient(LoginDTO loginDTO) {
        String msg = "";
        Patient patient1 = patientRepo.findByEmail(loginDTO.getEmail());
        if (patient1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = patient1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Patient> employee = patientRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {

                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        } else {
            return new LoginResponse("Email not exits", false);
        }

    }

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Override
    public String addAppointment(AppointmentDTO appointmentDTO) {
        Integer patientId = appointmentDTO.getId();

        Patient patient = patientRepo.findById(patientId).orElse(null);
        if (patient != null) {
            Appointment appointment = new Appointment();
            appointment.setName(appointmentDTO.getName());
            appointment.setAge(appointmentDTO.getAge());
            appointment.setGender(appointmentDTO.getGender());
            appointment.setHospital(appointmentDTO.getHospital());
            appointment.setDepartment(appointmentDTO.getDepartment());
            appointment.setToken(appointmentDTO.getToken());
            appointment.setDate(appointmentDTO.getDate());
            appointment.setTime(appointmentDTO.getTime());
            appointment.setSymptoms(appointmentDTO.getSymptoms());
            appointment.setPatient(patient); // Set the relationship with the patient

            appointmentRepo.save(appointment);
            return appointment.getName();
        } else {
            return "Patient not found.";
        }
    }


}
