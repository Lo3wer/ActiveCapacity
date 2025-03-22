import { Input } from "@/components/ui/input";

export default function SearchBar() {
    return (
        <div className="flex justify-center">
            <Input className={"my-10 w-[80%] rounded-4xl"} placeholder={` npm install lucide-reactsearch courts, gyms, classes`} />


        </div>
    );
}