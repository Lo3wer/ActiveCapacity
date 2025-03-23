import React from "react";
import { ServiceItem } from "./AllServices";
import { Button } from "./ui/button";

interface ServiceViewProps {
  results: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

const ServiceView: React.FC<ServiceViewProps> = ({
  results,
  onSelectService,
}) => {
  results = [
    {
      name: "ARC",
      type: "Gym",
      location: "UBC",
      address: "6138 Student Union Blvd Vancouver, BC V6T 1Z1",
      hours: [
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "10:00", close: "20:00" },
        { open: "10:00", close: "20:00" },
      ],
    },
    {
      name: "Birdcoop",
      type: "Gym",
      location: "UBC",
      address: "6000 Student Union Blvd Vancouver, BC V6T 1Z1",
      hours: [
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "09:00", close: "22:00" },
        { open: "09:00", close: "22:00" },
      ],
    },
  ];

  return (
    <div className="space-y-4 min-w-md max-w-xl bg-neutral-200 rounded-lg">
      <div className="flex justify-between text-lg font-medium pr-27 bg-neutral-950 pl-10 py-4 rounded-lg text-white">
        <p className="flex-1">Service</p>
        <p className="flex-1">Location</p>
      </div>
      <div className="px-10 py-4">
        {results.length === 0 ? (
          <p className="text-gray-500">No results found</p>
        ) : (
          results.map((item, index) => (
            <div key={index} className="flex justify-between items-center pb-6">
              <div className="flex-1">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.type}</p>
              </div>
              <p className="flex-1 text-sm text-gray-600">{item.location}</p>
              <Button
                onClick={() => onSelectService(item)} // Use a unique identifier (e.g., `id`) for edit
                variant={"link"}
                className="text-blue-700"
              >
                View
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceView;
