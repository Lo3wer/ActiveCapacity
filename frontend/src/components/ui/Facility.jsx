"use client"
import { useState } from "react"
import { Button } from "./button"
import { ChevronDown, Globe, Info, Pin, ChevronRight, ChevronRightCircleIcon } from "lucide-react"
import Link from "next/link"
export default function Facility({ gym }) {
    const [opened, isOpened] = useState(false)
    const ratio = gym.currentOccupancy / gym.totalCapacity;
    function getColorFromRatio(ratio) {
        const r = Math.round(255 * ratio); // Red increases with ratio
        const g = Math.round(255 * (1 - ratio)); // Green decreases with ratio
        return `rgb(${r}, ${g}, 0)`; // Blue remains 0 for a smooth gradient from green to red
    }

    return (

        <div className={`w-full ${opened ? "h-56" : "h-24"} text-[0.8rem] font-extralight rounded-xl 
         transition duration-200 border border-gray-300 p-3 ${gym.isOpen ? "border-l-green-600 border-l-4" : "border-l-red-500 border-l-4"}`}>
            <div className="flex w-full">
                <div className="mr-4">
                    {!opened ? <ChevronRight className="w-4 h-4" onClick={() => isOpened(!opened)}></ChevronRight> : <ChevronDown className="w-4 h-4" onClick={() => isOpened(!opened)}></ChevronDown>}
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between">
                        <p className="font-normal mb-1">{gym.name}</p>
                        <div className={`${gym.isOpen ? "bg-green-200" : "bg-red-300"} py-1 px-2 -mt-1 rounded-2xl`}>
                            {gym.isOpen ? <p className="text-green-600">Open</p> : <p className="text-red-500">Closed</p>}
                        </div>
                    </div>

                    <div className="flex gap-1 items-center">
                        <Pin className="w-3 h-3"></Pin>
                        <p className="text-[0.6rem]">{gym.location.street}</p>
                    </div>


                    <div className="flex justify-between mt-2">
                        <p>Capacity</p>
                        <p>{gym.currentOccupancy} / {gym.totalCapacity}</p>
                    </div>


                    <div className="relative top-0 w-full h-1 bg-gray-300 rounded-xl overflow-hidden">
                        <div
                            className={`h-full  rounded-xl transition-all duration-300`}
                            style={{ width: `${ratio * 100}%`, backgroundColor: getColorFromRatio(ratio) }}>
                        </div>
                    </div>

                </div>
            </div>

            {opened &&
                <div className="my-4 pl-3 flex flex-col gap-2 text-[0.7rem]">
                    <div className="flex items-center">
                        <Globe className="w-4 h-4 mx-4" /> <Link href={gym.link}>{gym.link}</Link>
                    </div>
                    <div className="flex">
                        <Pin className="w-4 h-4 mt-1 mx-4" /> <p>{gym.location.street} <br></br> {gym.location.city} <br></br> {gym.location.postal}</p>

                    </div>
                    <div className="flex items-center">
                        <Info className="w-4 h-4 mx-4" /> <p>{gym.hours}</p>
                    </div>

                </div>}


        </div>

    )
}