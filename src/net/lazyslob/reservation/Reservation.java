package net.lazyslob.reservation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
 // Domain class as object class 
@Entity
public class Reservation {
	    @Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;

		private String name;
		private String email;
		private String address;

		protected Reservation() {
		}

		protected Reservation(String name, String email, String address) {
			this.name = name;
			this.email = email;
			this.address = address;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

	}

