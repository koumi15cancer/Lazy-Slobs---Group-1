package com.LazySlob;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;



@EnableJpaAuditing
@SpringBootApplication
@EntityScan(basePackageClasses = {
		LazySlobApplication.class
})
public class LazySlobApplication {


	public static void main(String[] args) {
		SpringApplication.run(LazySlobApplication.class, args);
	}
}

