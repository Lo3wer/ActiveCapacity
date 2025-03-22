package com.example.capacity_backend.service;

import com.example.capacity_backend.model.Facility;
import com.example.capacity_backend.repository.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacilityService {

    private final FacilityRepository facilityRepository;

    @Autowired
    public FacilityService(FacilityRepository facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    public List<Facility> getAllFacilities() {
        return facilityRepository.findAll();
    }

    public Optional<Facility> getFacilityById(String id) {
        return facilityRepository.findById(id);
    }

    public Optional<Facility> getFacilityByName(String name) {
        return facilityRepository.findByName(name);
    }

    public Facility createFacility(Facility facility) {
        return facilityRepository.save(facility);
    }

    public boolean incrementOccupancy(String facilityId) {
        Optional<Facility> facilityOpt = facilityRepository.findById(facilityId);
        
        if (facilityOpt.isPresent()) {
            Facility facility = facilityOpt.get();
            boolean incremented = facility.incrementOccupancy();
            
            if (incremented) {
                facilityRepository.save(facility);
                return true;
            }
        }
        
        return false;
    }

    public boolean decrementOccupancy(String facilityId) {
        Optional<Facility> facilityOpt = facilityRepository.findById(facilityId);
        
        if (facilityOpt.isPresent()) {
            Facility facility = facilityOpt.get();
            boolean decremented = facility.decrementOccupancy();
            
            if (decremented) {
                facilityRepository.save(facility);
                return true;
            }
        }
        
        return false;
    }

    public void updateFacility(Facility facility) {
        facilityRepository.save(facility);
    }

    public void deleteFacility(String id) {
        facilityRepository.deleteById(id);
    }
}