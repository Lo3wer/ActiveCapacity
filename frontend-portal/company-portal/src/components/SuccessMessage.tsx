"use client";
import React, { useEffect, useState } from "react";

const SuccessMessage = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // setFade(true);
    const timer = setTimeout(() => {
      setFade(true);
    }, 4000); // Matches the timeout in the parent component

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center justify-center text-center px-4 py-2 text-bold bg-green-100 text-green-400 rounded-lg transition-opacity duration-1000 ease-out ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      Message Sent Successfully!
    </div>
  );
};

export default SuccessMessage;
