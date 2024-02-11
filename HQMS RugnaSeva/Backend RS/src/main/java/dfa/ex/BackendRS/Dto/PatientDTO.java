package dfa.ex.BackendRS.Dto;

public class PatientDTO {
    private int patientid;
    private String fname;
    private String lname;
    private int contact;
    private String email;
    private String password;

    public PatientDTO(int patientid, String fname, String lname, int contact, String email, String password) {
        this.patientid = patientid;
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.email = email;
        this.password = password;
    }

    public PatientDTO() {
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
        return "PatientDTO{" +
                "patientid=" + patientid +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", contact=" + contact +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
