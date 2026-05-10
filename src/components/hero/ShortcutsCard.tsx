'use client'
import { cn } from "@/lib/utils"

export default function ShortcutsCard() {
    return (
        <div
            className={cn(
                "flex items-center justify-between",
                "rounded-3xl bg-white p-5",
                "ring-1 ring-neutral-200/70",
            )}
        >
            <div>
                <div className="text-base font-semibold text-neutral-900">Shortcuts</div>
                <div className="mt-0.5 text-xs text-neutral-500">
                    New journal entry
                </div>
            </div>
            <div className="flex gap-1.5">
                <Kbd>⌘</Kbd>
                <Kbd>⌥</Kbd>
                <Kbd>J</Kbd>
            </div>
        </div>
    )
}

function Kbd({ children }: { children: React.ReactNode }) {
    return (
        <span
            className={cn(
                "flex size-7 items-center justify-center",
                "rounded-md bg-neutral-100",
                "text-xs font-medium text-neutral-600",
            )}
        >
            {children}
        </span>
    )
}
