package com.example.capacity_backend.model;

public class Address {
    private String street;
    private String city;
    private String postal;

    // Constructors
    public Address() {
    }

    public Address(String street, String city, String postal) {
        this.street = street;
        this.city = city;
        this.postal = postal;
    }

    // Getters and Setters
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostal() {
        return postal;
    }

    public void setPostal(String postal) {
        this.postal = postal;
    }
}