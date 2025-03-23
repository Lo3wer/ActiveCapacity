"use client";

import React, { useState, useEffect } from "react";
import ServiceViewSearch from "./ServiceViewSearch";
import ServiceView from "./ServiceView";

export interface ServiceItem {
  name: string;
  type: string;
  [key: string]: any; // Catch-all for extra fields
}

const AllServices = () => {
  const [fullData, setFullData] = useState<ServiceItem[]>([]); // Store all data from backend
  const [filteredData, setFilteredData] = useState<ServiceItem[]>([]); // Displayed data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/search/all");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setFullData(data); // Store all data
        setFilteredData(data); // Display all data initially
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredData(fullData); // Display all data when query is empty
      return;
    }

    const filtered = fullData.filter(
      (item) =>
        item.name?.toLowerCase().includes(query.toLowerCase()) ||
        item.type?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div className="space-y-8 flex-1">
      <ServiceViewSearch onSearch={handleSearch} />
      {filteredData.length == 0 ? (
        <ServiceView results={fullData} />
      ) : (
        <ServiceView results={filteredData} />
      )}
    </div>
  );
};

export default AllServices;
