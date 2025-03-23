import { Home } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    return (
        <div className="absolute bottom-0 left-0 w-full h-24 border grid grid-cols-4 justify-center">
            <Link href="/search">
                <Home size={24} />
            </Link>
            <Link href="/discover">
            </Link>

        </div>
    )

}