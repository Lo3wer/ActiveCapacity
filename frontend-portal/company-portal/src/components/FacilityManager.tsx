"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Pencil, Check, X } from "lucide-react";

type FacilityData = {
  facilityName: string;
  city: string;
  website: string;
};

type FieldName = keyof FacilityData;

const FacilityManager = () => {
  // Facility data state
  const [facilityData, setFacilityData] = useState({
    facilityName: "UBC Athletics & Recreation Sport Facilities",
    city: "Vancouver",
    website: "https://sportfacilities.ubc.ca/",
  });

  // Track which field is currently being edited
  const [editingField, setEditingField] = useState<FieldName | null>(null);

  // Temporary value for editing
  const [tempValue, setTempValue] = useState("");

  // Start editing a field
  const handleEdit = (field: FieldName) => {
    setEditingField(field);
    setTempValue(facilityData[field]);
  };

  // Save the edited value
  const handleSave = () => {
    if (editingField) {
      setFacilityData({
        ...facilityData,
        [editingField]: tempValue,
      });
      setEditingField(null);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingField(null);
  };

  // Render a field (either view mode or edit mode)
  const renderField = (label: string, field: FieldName) => {
    const isEditing = editingField === field;

    return (
      <div className="mb-4 p-3">
        <div className="flex justify-between items-center mb-1">
          <Label htmlFor={field} className="font-medium">
            {label}
          </Label>

          {isEditing ? (
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSave}
                className="h-8 w-8 text-green-600"
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancel}
                className="h-8 w-8 text-red-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleEdit(field)}
              className="h-8 w-8 text-blue-600"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          )}
        </div>

        {isEditing ? (
          <Input
            id={field}
            type={field === "website" ? "url" : "text"}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="mt-1"
            autoFocus
          />
        ) : (
          <div className="py-1 px-2 rounded min-h-9 flex items-center">
            {facilityData[field] || (
              <span className="text-gray-400">Not specified</span>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-2 p-6 bg-white rounded-lg shadow justify-self-start mr-10 h-fit w-full">
      <h2 className="text-xl font-bold mb-4">Facility Details</h2>

      {renderField("Facility Name", "facilityName")}
      {renderField("City", "city")}
      {renderField("Website", "website")}

      <div className="mt-6 pt-4 border-t">
        <Button
          type="button"
          variant={"outline"}
          className="w-full bg-neutral-950 text-white hover:text-white hover:bg-neutral-800"
          onClick={() => console.log("Saving facility data:", facilityData)}
        >
          Save All Changes
        </Button>
      </div>
    </div>
  );
};

export default FacilityManager;
