import React from "react";
import FacilityManger from "./FacilityManager";
import ServiceManger from "./ServiceManager";

export const FACILITY = "facility";
export const SERVICE = "service";

const Manage = ({
  session,
  service,
}: {
  session: string;
  service?: string;
}) => {
  return (
    <div className="flex-2 bg-neutral-200 rounded-lg min-h-160">
      {session == FACILITY ? <FacilityManger /> : <ServiceManger />}
    </div>
  );
};

export default Manage;
