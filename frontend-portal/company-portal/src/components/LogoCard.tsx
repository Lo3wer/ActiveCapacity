import React from "react";
import Link from "next/link";

export interface User {
  name: string;
}

const LogoCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Link href={"/"}>
      <h1 className="font-bold text-4xl">AtCapacity</h1>
      <div className="text-3xl">Company Portal - {user.name}</div>
    </Link>
  );
};

export default LogoCard;
