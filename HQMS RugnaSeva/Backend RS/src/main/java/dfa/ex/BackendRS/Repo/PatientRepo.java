package dfa.ex.BackendRS.Repo;


import dfa.ex.BackendRS.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface PatientRepo extends JpaRepository<Patient,Integer> {

    Optional<Patient> findOneByEmailAndPassword(String email, String Password);

    Patient findByEmail(String email);



}
