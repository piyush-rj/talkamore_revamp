"use client";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";

export default function ProductivityCard() {
    return (
        <div
            className={cn(
                "relative flex flex-col justify-between",
                "rounded-3xl p-6",
                "bg-linear-to-b from-[#D0E2EC] via-[#DFEEF6] to-[#C0D4E0]",
                "ring-1 ring-neutral-200/70",
                "overflow-hidden"
            )}
        >
            <div
                aria-hidden
                className={cn(
                    "pointer-events-none absolute inset-0",
                    "bg-[radial-gradient(120%_80%_at_30%_20%,rgba(255,255,255,0.9),transparent_60%)]"
                )}
            />

            <div className="relative flex items-center gap-1 ">
                <span
                    className={cn(
                        "text-7xl font-bold tracking-tight",
                        "bg-linear-to-b from-neutral-700 to-neutral-500 bg-clip-text text-transparent"
                    )}
                >
                    4×
                </span>
                <ChevronsRight className="size-20 text-neutral-400" strokeWidth={0.5} />
                <ChevronsRight className="-ml-9.5 size-20 text-neutral-300" strokeWidth={0.5} />
            </div>

            <p className="relative mt-12 max-w-56 text-sm leading-relaxed text-neutral-600">
                Four personas, each with their own voice and memory of you.
            </p>
        </div>
    );
}
