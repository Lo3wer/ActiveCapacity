import React from "react";

export interface User {
  name: string;
}

const LogoCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl">AtCapacity</h1>
      <div className="text-3xl">Company Portal - {user.name}</div>
    </div>
  );
};

export default LogoCard;
