
import { useContext } from "react"
import Facility from "./Facility"
import { gymContext } from "@/contexts/gymContext"


export default function FacilitiesList({ type, location }) {

    const gyms = useContext(gymContext).gyms

    return (
        <div>
            <h1 className="text-xl mt-10">{type}</h1>
            <div className="grid text-[0.8rem] grid-cols-[40px_90px_90px_75px_100px] font-extralight my-2">
                <p></p>
                <p>Name</p>
                <p>Location</p>
                <p>Status</p>
                <p>Capacity</p>
            </div>
            <div className="w-full flex flex-col gap-5">
                {location.error ? location.error : gyms.map(gym => <Facility key={gym.name} gym={gym} />)}



            </div>
        </div>
    )
}