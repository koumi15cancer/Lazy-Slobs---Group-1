package com.LazySlob.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.time.LocalTime;


@Entity
@Table(name = "Reservation")
@Data
public class Reservation implements Serializable {
    private static final long serialVersionUID = -297553281792804396L;
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    public long id;

    public String CustomerName;
    public String Email;
    public String PhoneNumber;
    public Integer Quantity;
    public String Description;




}
