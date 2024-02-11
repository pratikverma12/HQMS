package dfa.ex.BackendRS.Repo;

import dfa.ex.BackendRS.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@EnableJpaRepositories
@Repository
public interface AppointmentRepo extends JpaRepository<Appointment,Integer> {

}
