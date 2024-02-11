package dfa.ex.BackendRS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BackendRsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendRsApplication.class, args);
	}

}
