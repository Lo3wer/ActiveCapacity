package com.example.capacity_backend.repository;

import com.example.capacity_backend.model.Facility;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional; // Add this import

public interface FacilityRepository extends MongoRepository<Facility, String> {
    Optional<Facility> findByName(String name); // Existing method

    // Methods for querying by owner and address
    List<Facility> findByOwner(String owner);

    List<Facility> findByAddress(String address);
}