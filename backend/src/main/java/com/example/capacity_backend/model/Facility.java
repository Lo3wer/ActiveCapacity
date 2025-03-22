package com.example.capacity_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "facilities")
public class Facility {
    
    @Id
    private String id;
    private String name;
    private int currentOccupancy;
    private int totalCapacity;
    
    // Constructors
    public Facility() {
    }
    
    public Facility(String name, int totalCapacity) {
        this.name = name;
        this.currentOccupancy = 0;
        this.totalCapacity = totalCapacity;
    }
    
    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getCurrentOccupancy() {
        return currentOccupancy;
    }
    
    public void setCurrentOccupancy(int currentOccupancy) {
        this.currentOccupancy = currentOccupancy;
    }
    
    public int getTotalCapacity() {
        return totalCapacity;
    }
    
    public void setTotalCapacity(int totalCapacity) {
        this.totalCapacity = totalCapacity;
    }
    
    // Business methods
    public boolean incrementOccupancy() {
        if (currentOccupancy < totalCapacity) {
            currentOccupancy++;
            return true;
        }
        return false; // Facility is at capacity
    }
    
    public boolean decrementOccupancy() {
        if (currentOccupancy > 0) {
            currentOccupancy--;
            return true;
        }
        return false; // No one to decrement
    }
    
    public boolean isFull() {
        return currentOccupancy >= totalCapacity;
    }
    
    public double getOccupancyPercentage() {
        return ((double) currentOccupancy / totalCapacity) * 100;
    }
}