package com.LazySlob.model;


import lombok.Data;

import javax.persistence.*;



@Entity
@Table(name = "Reservation")
public class Reservation  {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    public long id;


    public Integer quantity;

    public String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="reservations_user")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
