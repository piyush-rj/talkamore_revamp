import { cn } from "@/lib/utils";
import { MessageBubble } from "./bubble";

export default function HardThingSection() {
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
                            "flex flex-col justify-center gap-3",
                            "rounded-[2.5rem] bg-[#B8CAF5]",
                            "p-10 sm:p-12 lg:p-16",
                            "min-h-105"
                        )}
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
                            "font-serif text-4xl leading-[1.05] tracking-tight",
                            "text-neutral-900",
                            "sm:text-5xl lg:text-6xl"
                        )}
                    >
                        they say the <span className="italic">hard thing</span>.
                    </h2>
                    <p
                        className={cn(
                            "mt-6 max-w-md text-base leading-relaxed",
                            "font-light text-neutral-600 sm:text-lg"
                        )}
                    >
                        the truth lands softer when it’s earned through care. maya names what you’ve
                        been working around — not as judgment, just as something out loud.
                    </p>
                </div>
            </div>
        </section>
    );
}
