"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import FacilitiesList from "./FacilitiesList"
import { gymContext } from "@/contexts/gymContext"
import { Activity } from "lucide-react"

export default function TypeSelect({ location }) {

    const [type, setType] = useState("Near Me")

    const { gyms, setGyms } = useContext(gymContext);

    // useEffect(() => {
    //     const getTypeFacilities = async () => {
    //         const response = await fetch(`/api/facilities?type=${type}`)
    //         const data = await response.json()
    //         setGyms(data)
    //     }
    //     getTypeFacilities();
    //     return () => {
    //         setGyms([])
    //     }
    // }, [type])

    return (
        <div className="mt-5 w-full">

            <div className="flex">
                <Activity className="w-4 h-4 mr-2 mt-2"></Activity>
                <h1 className="text-xl">Facilities</h1>
            </div>

            <div className="w-full flex justify-center items-center mt-3">
                <div className="w-full grid grid-cols-4 gap-2 text-[0.8rem] justify-center  bg-gray-200 rounded-xl">
                    <div className={`w-full h-24 ${type == "Near Me" && "bg-gray-100"} rounded-xl flex gap-2 flex-col justify-center items-center`}
                        onClick={() => setType("Near Me")}>

                        <Image src="/star.png" width={30} height={30} alt="yoga"></Image>
                        Near Me
                    </div>
                    <div className={`w-full h-24 ${type == "Courts" && "bg-gray-100"} rounded-xl flex gap-2 flex-col justify-center items-center`}
                        onClick={() => setType("Courts")}>

                        <Image src="/court.png" width={30} height={30} alt="classes"></Image>
                        Courts
                    </div>
                    <div className={`w-full h-24 ${type == "Classes" && "bg-gray-100"} rounded-xl flex gap-2 flex-col justify-center items-center`}
                        onClick={() => setType("Classes")}>

                        <Image src="/yoga.png" width={30} height={30} alt="yoga"></Image>
                        Classes
                    </div>
                    <div className={`w-full h-24 ${type == "Gyms" && "bg-gray-100"} rounded-xl flex gap-2 flex-col justify-center items-center`}
                        onClick={() => setType("Gyms")}>

                        <Image src="/gym.png" width={30} height={30} alt="yoga"></Image>
                        Gyms
                    </div>

                </div>
            </div>
            <FacilitiesList type={type} location={location} />
        </div>
    )
}