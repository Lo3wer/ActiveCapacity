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
      id: "123",
      name: "ARC",
      currentOccupancy: 50,
      totalCapacity: 80,
      location: {
        street: "6000 Student Union Blvd",
        city: "Vancouver, BC",
        postal: "V6T 1Z1",
        latitude: 49.2606,
        longitude: -123.246,
      },
      owner: "UBC Recreation",
      hours: [
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "06:30", close: "22:00" },
        { open: "10:00", close: "20:00" },
        { open: "10:00", close: "20:00" },
      ],
      link: "https://www.recreation.ubc.ca/",
      type: "GYM",
      isOpen: true,
    },
    {
      id: "432",
      name: "Birdcoop",
      type: "Gym",
      location: {
        street: "6000 Student Union Blvd",
        city: "Vancouver, BC",
        postal: "V6T 1Z1",
        latitude: 49.2606,
        longitude: -123.246,
      },
      currentCapacity: 65,
      totalCapacity: 80,
      hours: [
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "06:30", close: "23:00" },
        { open: "09:00", close: "22:00" },
        { open: "09:00", close: "22:00" },
      ],
      link: "https://www.recreation.ubc.ca/",
      isOpen: true,
    },
  ];

  return (
    <div className="space-y-4 min-w-md max-w-xl shadow rounded-lg">
      <div className="flex justify-between text-lg font-medium pr-27 bg-neutral-950 pl-10 py-4 rounded-lg text-white">
        <p className="flex-1">Service</p>
        <p className="flex-1">City</p>
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
              <p className="flex-1 text-sm text-gray-600">
                {item.location.city}
              </p>
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
