"use client";

import React, { useState, useEffect } from "react";
import ServiceViewSearch from "./ServiceViewSearch";
import ServiceView from "./ServiceView";

interface OperationalHours {
  open: string;
  close: string;
}

export interface ServiceItem {
  name: string;
  type: string;
  location: string;
  address: string;
  hours: OperationalHours[];
  [key: string]: any; // Catch-all for extra fields
}

interface AllServicesProps {
  onSelectService: (service: ServiceItem) => void; // Callback to send service up
  refreshKey: number;
}

const AllServices: React.FC<AllServicesProps> = ({
  onSelectService,
  refreshKey,
}) => {
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
  }, [refreshKey]);

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

      <ServiceView results={filteredData} onSelectService={onSelectService} />
    </div>
  );
};

export default AllServices;
