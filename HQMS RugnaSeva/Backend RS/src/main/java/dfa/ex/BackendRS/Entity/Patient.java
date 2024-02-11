package dfa.ex.BackendRS.Entity;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="patient")
public class Patient {

    @Id
    @Column(name="patient_id", length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patientid;

    @Column(name = "fname", length = 255)
    private String fname;

    @Column(name = "lname", length = 255)
    private String lname;

    @Column(name = "contact", length = 255)
    private int contact;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 255)
    private String password;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Appointment> appointment;


    public Patient(int patientid, String fname, String lname, int contact, String email, String password) {
        this.patientid = patientid;
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.email = email;
        this.password = password;
    }

    public Patient() {
    }

    public int getPatientid() {
        return patientid;
    }

    public void setPatientid(int patientid) {
        this.patientid = patientid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public int getContact() {
        return contact;
    }

    public void setContact(int contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "patientid=" + patientid +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", contact=" + contact +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
