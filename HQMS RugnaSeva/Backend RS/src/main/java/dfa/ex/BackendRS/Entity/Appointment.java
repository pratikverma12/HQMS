package dfa.ex.BackendRS.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="appointment")
public class Appointment {
    @Id
    @Column(name="appointment_id", length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "age", length = 255)
    private int age;

    @Column(name = "gender", length = 255)
    private String gender;

    @Column(name = "hospital", length = 255)
    private String hospital;

    @Column(name = "department", length = 255)
    private String department;

    @Column(name = "token", length = 255)
    private String token;

    @Column(name = "symptoms", length = 255)
    private String symptoms;

    @Column(name = "date", length = 255)
    private String date;

    @Column(name = "time", length = 255)
    private String time;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    private Patient patient;



    public Appointment() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}

