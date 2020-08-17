package com.LazySlob.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "Reservation")
@Data
public class Reservation  {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    public long id;

    public String customerName;

    public String email;

    public String phoneNumber;

    public Integer quantity;


    public String description;


}
