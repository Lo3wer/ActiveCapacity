package com.example.capacity_backend.repository;

import com.example.capacity_backend.model.Facility;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FacilityRepository extends MongoRepository<Facility, String> {
    Optional<Facility> findByName(String name);
}