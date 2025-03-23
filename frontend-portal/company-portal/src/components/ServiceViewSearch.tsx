"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react"; // For the search icon

const ServiceViewSearch = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); // Clear the results
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-xl">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 py-2 rounded-lg border border-gray-300 "
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        {query && (
          <X
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-red-500"
            onClick={handleClear}
          />
        )}
      </div>
      <Button
        onClick={handleSearch}
        className="bg-neutral-950 hover:bg-neutral-800 text-white hover:text-white"
        variant={"outline"}
      >
        Search
      </Button>
    </div>
  );
};

export default ServiceViewSearch;
