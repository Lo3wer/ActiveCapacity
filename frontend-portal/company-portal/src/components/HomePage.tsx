"use client";
import React, { useState } from "react";
import AllServices from "./AllServices";
import Manage from "./Manage";
import { ServiceItem } from "./AllServices";

const HomePage = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [refreshKey, setRefreshKey] = useState(0); // Force component re-render

  // Trigger a refresh by changing the refreshKey
  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1); // Increment key to force refresh
  };

  return (
    <div className="p-16 flex flex-row space-x-10">
      <AllServices
        onSelectService={setSelectedService}
        refreshKey={refreshKey}
      />
      <Manage
        session="facility"
        service={selectedService}
        onSave={handleRefresh}
      />
    </div>
  );
};

export default HomePage;
