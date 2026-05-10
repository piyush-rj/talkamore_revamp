"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import CalendarCard from "./hero/CalendarCard";
import ShortcutsCard from "./hero/ShortcutsCard";
import ProductivityCard from "./hero/ProductivityCard";
import RightCardStack from "./hero/RightCardStack";
import { LuCircleDollarSign } from "react-icons/lu";
import Reveal from "./Reveal";

export default function LandingHeroSection() {
    return (
        <Reveal>
            <section className="relative w-full overflow-hidden pt-28">
                <div className="relative mx-auto max-w-6xl">
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2
                            className={cn(
                                "text-5xl sm:text-[65px]",
                                "font-bold tracking-tight text-neutral-900 ",
                                "leading-[1.05]"
                            )}
                        >
                            <div className="font-medium">A thinking partner</div>
                            <div>who remembers</div>
                        </h2>

                        <p
                            className={cn(
                                "mt-4 max-w-xl",
                                "text-base sm:text-lg text-neutral-500",
                                "leading-relaxed"
                            )}
                        >
                            The things you typed last month still matter this week. Nothing has to
                            be re-explained from scratch again
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="#start"
                                className={cn(
                                    "group inline-flex select-none items-center gap-1.5",
                                    "rounded-sm px-4 py-2",
                                    "text-[13px] font-medium text-white",
                                    "bg-linear-to-b from-neutral-700 to-neutral-950",
                                    "ring-1 ring-black/60",
                                    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.45),0_1px_2px_0_rgba(0,0,0,0.4),0_4px_10px_-2px_rgba(0,0,0,0.35)]",
                                    "transition-transform duration-150 ease-out",
                                    "active:translate-y-px"
                                )}
                            >
                                Get Started
                                <ChevronRight
                                    className={cn(
                                        "size-3.5 text-white/55",
                                        "transition-transform duration-150",
                                        "group-hover:translate-x-0.5"
                                    )}
                                />
                            </a>

                            <a
                                href="#pricing"
                                className={cn(
                                    "group inline-flex select-none items-center gap-1.5",
                                    "rounded-sm px-4 py-2",
                                    "text-[13px] font-medium text-neutral-800",
                                    "bg-linear-to-b from-white to-neutral-100",
                                    "ring-1 ring-neutral-300",
                                    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_-1px_0_0_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.06),0_4px_10px_-2px_rgba(0,0,0,0.06)]",
                                    "transition-transform duration-150 ease-out",
                                    "active:translate-y-px"
                                )}
                            >
                                See Pricing
                                <LuCircleDollarSign className={cn("size-3.5 text-neutral-800")} />
                            </a>
                        </div>
                    </div>

                    <DecorArcs />

                    <div className="relative z-10 mt-12 grid grid-cols-3 gap-6 max-w-4xl mx-auto pb-4">
                        <div className="flex flex-col gap-6">
                            <CalendarCard />
                            <ShortcutsCard />
                        </div>

                        <ProductivityCard />
                        <RightCardStack />
                    </div>
                </div>
            </section>
        </Reveal>
    );
}

function DecorArcs() {
    return (
        <>
            <div className="pointer-events-none absolute top-32 left-0 hidden w-[28%] sm:block">
                <span
                    className={cn(
                        "absolute -top-1 left-6",
                        "text-sm italic text-neutral-400",
                        "font-serif"
                    )}
                >
                    Meetings creation
                </span>
                <svg
                    viewBox="0 0 280 160"
                    fill="none"
                    className="h-40 w-full text-neutral-300"
                    aria-hidden
                >
                    <path
                        d="M10 20 C 40 90, 140 150, 270 140"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeDasharray="2 5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="pointer-events-none absolute top-32 right-0 hidden w-[28%] sm:block">
                <span
                    className={cn(
                        "absolute -top-1 right-6",
                        "text-sm italic text-neutral-400",
                        "font-serif"
                    )}
                >
                    Tasks creation
                </span>
                <svg
                    viewBox="0 0 280 160"
                    fill="none"
                    className="h-40 w-full text-neutral-300"
                    aria-hidden
                >
                    <path
                        d="M270 20 C 240 90, 140 150, 10 140"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeDasharray="2 5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </>
    );
}
