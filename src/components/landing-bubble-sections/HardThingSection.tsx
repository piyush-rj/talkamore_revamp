"use client";
import { cn } from "@/lib/utils";
import { grainBackground, MessageBubble } from "./bubble";
import Reveal from "../Reveal";

export default function HardThingSection() {
    return (
        <Reveal>
            <section className="flex w-full justify-center bg-white -mt-25">
                <div
                    className={cn(
                        "mx-auto grid w-full max-w-6xl",
                        "grid-cols-1 items-center gap-12 px-6",
                        "lg:grid-cols-2 lg:gap-20"
                    )}
                >
                    <div className="order-1 lg:order-1">
                        <div
                            className={cn(
                                "flex flex-col justify-center gap-3",
                                "rounded-[2.5rem] bg-[#B8CAF5]",
                                "p-10 sm:p-12 lg:p-16",
                                "min-h-105"
                            )}
                            style={grainBackground}
                        >
                            <MessageBubble side="user">i’m fine. just busy.</MessageBubble>
                            <MessageBubble side="maya">
                                you’ve said that three weeks in a row. what’s the thing the busy is
                                keeping you out of?
                            </MessageBubble>
                        </div>
                    </div>

                    <div className="order-2 lg:order-2">
                        <h2
                            className={cn(
                                "text-4xl leading-[1.05] tracking-tight",
                                "text-neutral-900",
                                "sm:text-5xl lg:text-6xl"
                            )}
                        >
                            they say the hard thing.
                        </h2>
                        <p
                            className={cn(
                                "mt-10 max-w-md text-base leading-relaxed",
                                "font-light text-neutral-600 sm:text-lg"
                            )}
                        >
                            the truth lands softer when it’s earned through care. maya names what
                            you’ve been working around — not as judgment, just as something out
                            loud. the sentence you’ve been avoiding for weeks finally has a
                            shape, and it stops costing you energy to hold.
                        </p>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
