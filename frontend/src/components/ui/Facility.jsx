"use client"
import { useState } from "react"
import { Button } from "./button"
import { ChevronDown, Globe, Info, Pin } from "lucide-react"
import Link from "next/link"
export default function Facility({ gym }) {
    const [opened, isOpened] = useState(false)
    return (
        <div className={`w-full ${opened ? "h-42" : "h-9"} text-[0.8rem] font-extralight bg-gray-200 rounded-xl 
        transition duration-200`}>
            <div className={`grid grid-cols-[25px_80px_85px_65px_60px] gap-2 p-2 rounded-xl items-center ${opened && "bg-gray-100"}`}>
                <ChevronDown className="w-4 h-4" onClick={() => isOpened(!opened)}></ChevronDown>
                <p className="truncate font-normal">{gym.name}</p>
                <p className="truncate">{gym.location}</p>
                <p className="truncate">{gym.status}</p>
                <p className="truncate">{gym.capacity}</p>
            </div>


            {opened &&
                <div className="-mx-2 my-2 flex flex-col gap-2">
                    <div className="flex items-center">
                        <Globe className="w-4 h-4 mx-4" /> <Link href={gym.link}>{gym.link}</Link>
                    </div>
                    <div className="flex">
                        <Pin className="w-4 h-4 mt-1 mx-4" /> <p>{gym.street} <br></br> {gym.city} <br></br> {gym.postal}</p>

                    </div>
                    <div className="flex items-center">
                        <Info className="w-4 h-4 mx-4" /> <p>{gym.hours}</p>
                    </div>



                </div>}

        </div >
    )
}