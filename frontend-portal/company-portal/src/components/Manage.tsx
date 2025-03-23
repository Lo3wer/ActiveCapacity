"use client";
import React, { useState } from "react";
import FacilityManger from "./FacilityManager";
import ServiceManger from "./ServiceManager";
import { ServiceItem } from "./AllServices";

export const FACILITY = "facility";
export const SERVICE = "service";

const Manage = ({
  session,
  service,
  onSave,
}: {
  session: string;
  service: ServiceItem | null;
  onSave: () => void;
}) => {
  return (
    <div className="flex flex-row flex-2 rounded-lg min-h-160 justify-start">
      <FacilityManger />
      <ServiceManger service={service} onSave={onSave} />
    </div>
  );
};

export default Manage;
