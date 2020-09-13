package com.LazySlob.models;

import org.springframework.stereotype.Component;

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
