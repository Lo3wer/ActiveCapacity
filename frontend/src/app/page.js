"use client"

import { useState, useEffect, createContext } from "react";

import TypeSelect from "@/components/ui/TypeSelect";
import HeroSearch from "@/components/ui/HeroSearch";
import Image from "next/image";
import { gymContext } from "@/contexts/gymContext";

export default function Home() {

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    loading: true,
    error: false
  });

  const [gyms, setGyms] = useState([]);

  useEffect(() => {

    async function getNearbyGyms() {
      // const response = await fetch(`/api/gyms?latitude=${location.latitude}&longitude=${location.longitude}`);
      const response = await fetch(`/api/gyms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude
        })
      });
      const data = await response.json();
      setGyms(data);
    }

    if (!navigator.geolocation) {
      setLocation({ ...location, loading: false, error: "Geolocation is not supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: false
        });
        console.log("IT SUCCESSFULLY UPDATED THE LOCATION");
        getNearbyGyms();
      },
      () => {
        console.log("IT FAILED TO UPDATE THE LOCATION");
        setLocation({ ...location, loading: false, error: "unable to retrieve location" });
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );


  }, []);



  return (
    <div className="flex flex-col p-4 w-full">
      <gymContext.Provider value={{ gyms, setGyms }}>
        <HeroSearch />
        <TypeSelect location={location} />
      </gymContext.Provider>
    </div>

  );
}
