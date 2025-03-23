import React from "react";
import AllServices from "./AllServices";
import Manage from "./Manage";

const HomePage = () => {
  return (
    <div className="p-16 flex flex-row space-x-10">
      <AllServices />
      <Manage session="facility" />
    </div>
  );
};

export default HomePage;
