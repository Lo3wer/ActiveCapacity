
import { useContext } from "react"
import Facility from "./Facility"
import { gymContext } from "@/contexts/gymContext"
import { RefreshCcw } from "lucide-react";


export default function FacilitiesList({ type, location }) {

    // const { gyms, setGyms } = useContext(gymContext)
    const gyms = [
        {
            "id": "123",
            "name": "ARC Gym",
            "currentOccupancy": 50,
            "totalCapacity": 80,
            "location": {
                "street": "6000 Student Union Blvd",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "UBC Recreation",
            "hours": "06:30-22:00",
            "link": "https://www.recreation.ubc.ca/",
            "type": "GYM",
            "isOpen": true
        },

        {
            "id": "124",
            "name": "BirdCoop",
            "currentOccupancy": 60,
            "totalCapacity": 80,
            "location": {
                "street": "6000 Student Union Blvd",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "UBC Recreation",
            "hours": "06:30-22:00",
            "link": "https://www.recreation.ubc.ca/",
            "type": "GYM",
            "isOpen": false
        }
    ];

    return (
        <div>
            <div className="flex justify-between mt-10 items-center">
                <h1 className="text-xl mb-4">{type}</h1>
                <RefreshCcw className="w-4 h-4" onClick={() => window.location.reload()} />
            </div>

            {/* <div className="grid text-[0.8rem] grid-cols-[40px_90px_90px_75px_100px] font-extralight my-2">
                <p></p>
                <p>Name</p>
                <p>Location</p>
                <p>Status</p>
                <p>Capacity</p>
            </div> */}

            <div className="w-full flex flex-col gap-5">
                {/* {location.error ? location.error : gyms.map(gym => <Facility key={gym.name} gym={gym} />)} */}
                {gyms.map(gym => {
                    return <Facility key={gym.name} gym={gym} />
                })}




            </div>
        </div>
    )
}