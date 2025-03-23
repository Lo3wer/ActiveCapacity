import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ServiceItem } from "./AllServices";

interface ServiceManagerProps {
  service: ServiceItem | null;
  onSave: () => void;
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ServiceManager: React.FC<ServiceManagerProps> = ({ service, onSave }) => {
  const [formData, setFormData] = useState<ServiceItem | null>(service);

  // Sync formData with the new service when it changes
  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      setFormData(null);
    }
  }, [service]);

  if (!formData) {
    return (
      <div className="p-6 bg-white rounded-lg shadow min-w-[400px]">
        <h2 className="text-2xl font-bold">No service selected</h2>
        <p className="text-gray-500">Select a service to view details.</p>
      </div>
    );
  }

  // Handle text field changes
  const handleChange = (
    field: keyof ServiceItem,
    value: string | number | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle nested location field changes
  const handleLocationChange = (
    field: keyof ServiceItem["location"],
    value: string | number
  ) => {
    if (formData) {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [field]: value,
        },
      });
    }
  };

  // Handle hour changes
  const handleHourChange = (
    index: number,
    field: "open" | "close",
    value: string
  ) => {
    const updatedHours = [...formData.hours];
    updatedHours[index] = { ...updatedHours[index], [field]: value };
    setFormData({ ...formData, hours: updatedHours });
  };

  const handleSubmit = async () => {
    if (!formData) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/services/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update service");
      }

      console.log("Service updated:", formData);
      onSave();
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow min-w-[400px]">
      <h2 className="text-2xl font-bold mb-4">Edit Service</h2>

      <Label className="mt-4 mb-2">Name</Label>
      <Input
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <Label className="mt-4 mb-2">Type</Label>
      <Input
        value={formData.type}
        onChange={(e) => handleChange("type", e.target.value)}
      />

      <Label className="mt-4 mb-2">Owner</Label>
      <Input
        value={formData.owner}
        onChange={(e) => handleChange("owner", e.target.value)}
      />

      {/* Location Fields */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Location</h3>
        <Label className="mt-4 mb-2">Street</Label>
        <Input
          value={formData.location.street}
          onChange={(e) => handleLocationChange("street", e.target.value)}
        />

        <Label className="mt-4 mb-2">City</Label>
        <Input
          value={formData.location.city}
          onChange={(e) => handleLocationChange("city", e.target.value)}
        />

        <Label className="mt-4 mb-2">Postal Code</Label>
        <Input
          value={formData.location.postal}
          onChange={(e) => handleLocationChange("postal", e.target.value)}
        />

        <Label className="mt-4 mb-2">Latitude</Label>
        <Input
          type="number"
          value={formData.location.latitude}
          onChange={(e) =>
            handleLocationChange("latitude", Number(e.target.value))
          }
        />

        <Label className="mt-4 mb-2">Longitude</Label>
        <Input
          type="number"
          value={formData.location.longitude}
          onChange={(e) =>
            handleLocationChange("longitude", Number(e.target.value))
          }
        />
      </div>

      {/* Hours Section */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Operating Hours</h3>

        {formData.hours.map((hour, index) => (
          <div key={index} className="flex items-center space-x-4 mb-3">
            <Label className="w-20">{daysOfWeek[index]}</Label>

            <Input
              type="time"
              value={hour.open}
              onChange={(e) => handleHourChange(index, "open", e.target.value)}
              className="flex-1"
            />

            <Input
              type="time"
              value={hour.close}
              onChange={(e) => handleHourChange(index, "close", e.target.value)}
              className="flex-1"
            />
          </div>
        ))}
      </div>

      {/* Link Field */}
      <Label className="mt-4 mb-2">Link</Label>
      <Input
        value={formData.link}
        onChange={(e) => handleChange("link", e.target.value)}
      />

      {/* Open Status */}
      <div className="mt-6 flex justify-between items-center">
        <Label>Open</Label>
        <input
          type="checkbox"
          checked={formData.isOpen}
          onChange={(e) => handleChange("isOpen", e.target.checked)}
          className="h-5 w-5"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          onClick={handleSubmit}
          className="bg-neutral-950 hover:bg-neutral-800 text-white"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ServiceManager;
