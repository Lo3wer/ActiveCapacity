"use client"

import { Search } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from 'use-debounce';
export default function HeroSearch() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const debouncedSearch = useDebouncedCallback(async (query) => {
        if (query.trim() === "") return; // Avoid empty queries
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();
        setResults(data);
    }, 2000);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center mt-[10%]">AtCapacity</h1>
            {/* <Search size={32} className="mt-14"></Search> */}
            <div className="relative mt-5 mb-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="search for facilities"
                    className="pl-9 bg-muted/50 border-muted transition-all focus:shadow-md focus:border-primary/30"
                    onChange={(e) => {
                        const newQuery = e.target.value;
                        setQuery(newQuery);
                        debouncedSearch(newQuery); // Call debounced function
                    }
                    }
                />
            </div>
        </div>

    )
}