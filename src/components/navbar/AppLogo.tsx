import { cn } from "@/lib/utils";
import { JSX } from "react";

export default function AppLogo({className}: { className?: string }): JSX.Element {
    return (
        <div className={cn("text-black font-medium relative", className)}>
            talkamore
            <span className="h-1 w-1 bg-[#A55949] rounded-full absolute bottom-1.5 -right-1.5"/>
        </div>
    );
}
