import { cn } from "@/lib/utils";
import { DateLabel, MessageBubble } from "./bubble";

export default function MemorySection() {
    return (
        <section className="flex w-full justify-center bg-white">
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
                            "flex flex-col justify-center gap-2",
                            "rounded-[2.5rem] bg-[#FDE589]",
                            "p-10 sm:p-12 lg:p-16",
                            "min-h-105"
                        )}
                    >
                        <DateLabel side="right">oct 14</DateLabel>
                        <MessageBubble side="user">
                            my sister still isn’t returning my calls.
                        </MessageBubble>

                        <DateLabel side="left">apr 3, six months later</DateLabel>
                        <MessageBubble side="maya">
                            it’s been quiet with sarah for a while now. how are you holding that?
                        </MessageBubble>
                    </div>
                </div>

                <div className="order-2 lg:order-2">
                    <h2
                        className={cn(
                            "font-serif text-4xl leading-[1.05] tracking-tight",
                            "text-neutral-900",
                            "sm:text-5xl lg:text-6xl"
                        )}
                    >
                        nothing gets <span className="italic">forgotten</span>.
                    </h2>
                    <p
                        className={cn(
                            "mt-6 max-w-md text-base leading-relaxed",
                            "font-light text-neutral-600 sm:text-lg"
                        )}
                    >
                        the conversation doesn’t reset. six months later she remembers your sister,
                        the meeting that went sideways, the thing you mentioned in passing.
                    </p>
                </div>
            </div>
        </section>
    );
}
