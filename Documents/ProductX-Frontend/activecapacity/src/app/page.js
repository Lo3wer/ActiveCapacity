import Image from "next/image";
import { Input } from "@/components/ui/input";
import SearchBar from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col mt-[10%]">
      <h1 className="text-3xl font-bold text-center">AtCapacity</h1>
     <SearchBar></SearchBar>

    </div>
  );
}
