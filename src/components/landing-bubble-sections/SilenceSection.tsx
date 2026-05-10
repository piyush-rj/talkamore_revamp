import { cn } from "@/lib/utils";
import { grainBackground, MessageBubble } from "./bubble";
import Reveal from "../Reveal";

export default function SilenceSection() {
    return (
        <Reveal>
            <section className="flex w-full justify-center bg-white">
                <div
                    className={cn(
                        "mx-auto grid w-full max-w-6xl",
                        "grid-cols-1 items-center gap-12 px-6",
                        "lg:grid-cols-2 lg:gap-20"
                    )}
                >
                    <div className="order-2 lg:order-1">
                        <h2
                            className={cn(
                                "text-4xl leading-[1.05] tracking-tight",
                                "text-neutral-900",
                                "sm:text-5xl lg:text-6xl"
                            )}
                        >
                            the silence is on <span className="">purpose</span>.
                        </h2>
                        <p
                            className={cn(
                                "mt-10 max-w-md text-base leading-relaxed",
                                "font-light text-neutral-600 sm:text-lg"
                            )}
                        >
                            sometimes the right reply is none. she sits with you in the quiet and
                            waits for the part you weren’t ready to say. no rush to summarize, no
                            five-paragraph pep talk — just enough room for the next honest sentence
                            to land on its own.
                        </p>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div
                            className={cn(
                                "flex flex-col justify-center gap-3",
                                "rounded-[2.5rem] bg-[#94D7A3]",
                                "p-10 sm:p-12 lg:p-16",
                                "min-h-105"
                            )}
                            style={grainBackground}
                        >
                            <MessageBubble side="user">i don’t know what to do.</MessageBubble>
                            <MessageBubble side="maya">hm.</MessageBubble>
                            <MessageBubble side="maya">
                                start with the part that feels the most impossible. leave out the
                                rest.
                            </MessageBubble>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
