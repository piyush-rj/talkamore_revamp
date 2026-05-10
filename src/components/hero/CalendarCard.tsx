'use client'
import { cn } from "@/lib/utils"
import { Bell, Minus, X } from "lucide-react"
import { LuCircleDotDashed } from "react-icons/lu"

export default function CalendarCard() {
    return (
        <div
            className={cn(
                "rounded-3xl bg-white p-5",
                "ring-1 ring-neutral-200/70",
            )}
        >
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-500">Recall</span>
                <button
                    type="button"
                    aria-label="dismiss"
                    className="text-neutral-400 transition-colors hover:text-neutral-600"
                >
                    <LuCircleDotDashed className="size-3.5" />
                </button>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span
                    className={cn(
                        "flex size-7 items-center justify-center",
                        "rounded-md bg-rose-400",
                    )}
                >
                    <span className="block size-2.5 rounded-full bg-white" />
                </span>
                <span className="text-sm text-neutral-600">Maya · persona</span>
            </div>

            <div className="mt-4">
                <div className="text-2xl font-semibold tracking-tight text-neutral-900">
                    Tuesday, 12 Mar
                </div>
                <div className="mt-0.5 text-sm text-neutral-500">
                    “the run plan you mentioned”
                </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-500">
                <span>Surfaced from:</span>
                <span className="inline-flex items-center gap-1 font-medium text-neutral-700">
                    <span
                        className={cn(
                            "inline-block size-3 rounded-[3px]",
                            "bg-linear-to-br from-fuchsia-500 to-amber-400",
                        )}
                    />
                    3 entries
                </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <button
                    type="button"
                    className={cn(
                        "rounded-full bg-neutral-900 px-4 py-2",
                        "text-xs font-medium text-white",
                        "transition-colors hover:bg-neutral-800",
                    )}
                >
                    Open thread
                </button>
                <div className="flex gap-2">
                    <IconChip>
                        <Bell className="size-3.5" />
                    </IconChip>
                    <IconChip>
                        <Minus className="size-3.5" />
                    </IconChip>
                </div>
            </div>
        </div>
    )
}

function IconChip({ children }: { children: React.ReactNode }) {
    return (
        <button
            type="button"
            className={cn(
                "flex size-7 items-center justify-center",
                "rounded-full ring-1 ring-neutral-200",
                "text-neutral-500 transition-colors hover:bg-neutral-50",
            )}
        >
            {children}
        </button>
    )
}
