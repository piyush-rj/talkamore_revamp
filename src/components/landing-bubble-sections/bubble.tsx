import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MessageBubble({
    side,
    children,
    className,
}: {
    side: "user" | "maya";
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5",
                "text-sm leading-snug shadow-[0_4px_16px_rgba(0,0,0,0.06)] sm:text-base",
                side === "user"
                    ? "max-w-[70%] self-end bg-neutral-900 text-white"
                    : "self-start bg-[#fbf6e8] text-neutral-900",
                className
            )}
        >
            {children}
        </div>
    );
}

export function DateLabel({
    children,
    side = "left",
}: {
    children: ReactNode;
    side?: "left" | "right";
}) {
    return (
        <div
            className={cn(
                "px-1 font-serif text-xs text-neutral-700/60 italic",
                side === "right" ? "self-end" : "self-start"
            )}
        >
            {children}
        </div>
    );
}
