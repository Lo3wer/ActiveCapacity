import { Search } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
export default function HeroSearch() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center mt-[10%]">AtCapacity</h1>
            {/* <Search size={32} className="mt-14"></Search> */}
            <Input className="w-full bg-gray-100 rounded-4xl mt-5 border-none focus:border-none" placeholder={`search gyms, courts, classes`}></Input>
        </div>

    )
}