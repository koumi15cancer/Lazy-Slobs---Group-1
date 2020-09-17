package com.LazySlob;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;



@EnableJpaAuditing
@SpringBootApplication
@EntityScan(basePackageClasses = {
		LazySlobApplication.class,Jsr310JpaConverters.class
})
public class LazySlobApplication {


	public static void main(String[] args) {
		SpringApplication.run(LazySlobApplication.class, args);
	}
}

