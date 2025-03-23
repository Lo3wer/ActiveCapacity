import React from "react";
import { User } from "./LogoCard";
import LogoCard from "./LogoCard";
import { Button } from "./ui/button";

const Header: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="bg-neutral-950 flex flex-row p-10 text-white justify-between">
      <LogoCard user={user} />
      <div className="flex my-auto gap-5">
        <Button variant="ghost" className="text-red-500">
          Report Issue
        </Button>
        <Button variant="ghost">Manage Facility</Button>
        <Button variant="ghost">Logout</Button>
      </div>
    </div>
  );
};

export default Header;
