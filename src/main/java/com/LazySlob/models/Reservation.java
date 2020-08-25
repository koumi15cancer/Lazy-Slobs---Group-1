package com.LazySlob.models;


import javax.persistence.*;
import javax.validation.constraints.Size;


@Entity
@Table(name = "Reservation")
public class Reservation  {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    public long id;

    @Column(name="quantity")
    public Integer quantity;

    @Column(name="description")
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

    public Reservation(){};

    public Reservation(Integer quantity, String description) {
        this.quantity = quantity;
        this.description = description;
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
