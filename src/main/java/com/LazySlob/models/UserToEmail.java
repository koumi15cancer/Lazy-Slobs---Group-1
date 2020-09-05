package com.LazySlob.models;

import org.springframework.stereotype.Component;
/**
 * Date :July 25,2018
 * @author MukulJaiswal
 * @version 1.0
 *
 */

@Component
public class UserToEmail {

	private String emailAddress;

	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
}
