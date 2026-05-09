import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export default function SectionHeader({ title, description, className }: SectionHeaderProps) {
    return (
        <Reveal>
            <div className={cn("mb-20 text-center sm:mb-24", className)}>
                <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
                    {title}
                </p>
                <h2 className="mt-4 text-3xl font-light tracking-tight text-neutral-900 sm:text-5xl">
                    {description}
                </h2>
            </div>
        </Reveal>
    );
}
