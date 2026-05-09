"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Iphone } from "@/src/components/ui/iphone";
import { cn } from "@/lib/utils";
import { LuArrowUp } from "react-icons/lu";

type Feature = { label: string; active?: boolean };

const features: Feature[] = [
    { label: "voices that match the moment, not just the message" },
    { label: "remembers what you mentioned in passing last tuesday" },
    { label: "leaves silence when silence is the right answer", active: true },
    { label: "names the version you’re not saying out loud" },
];

type Exchange = { user: string; maya: string };

const exchanges: Exchange[] = [
    { user: "i keep saying it’s fine", maya: "is it?" },
    { user: "no", maya: "tell me the version you’re not saying out loud." },
    { user: "i don’t know how to.", maya: "you already started. you said no." },
    { user: "what if it’s nothing?", maya: "nothing doesn’t keep you up at 2am." },
];

export default function LandingIphoneSection() {
    return (
        <section className="flex h-screen w-full justify-center bg-white">
            <div
                className={cn(
                    "mx-auto grid max-w-6xl grid-cols-1 items-center",
                    "gap-16 px-6",
                    "lg:grid-cols-2 lg:gap-20"
                )}
            >
                <div>
                    <h2
                        className={cn(
                            "text-4xl leading-[1.05] font-semibold tracking-tight",
                            "text-neutral-900",
                            "sm:text-5xl lg:text-6xl"
                        )}
                    >
                        your messages pile up. <br />
                        talkamore listens.
                    </h2>

                    <ul className="mt-12 flex flex-col">
                        {features.map((f) => (
                            <FeatureItem key={f.label} {...f} />
                        ))}
                    </ul>
                </div>

                <div className="rounded-[2.5rem] bg-[#EEBACB] p-10 lg:p-14">
                    <div className="dark mx-auto w-full max-w-60">
                        <Iphone>
                            <MayaChat />
                        </Iphone>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ label, active }: Feature) {
    return (
        <li
            className={cn(
                "border-l-2 py-3 pl-5 text-base",
                "transition-colors",
                active
                    ? "border-[#e7748f] font-medium text-neutral-900"
                    : "border-neutral-200 text-neutral-400"
            )}
        >
            {label}
        </li>
    );
}

type ChatMessage = {
    id: number;
    side: "user" | "maya";
    text: string;
    isTyping: boolean;
};

function MayaChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const idRef = useRef<number>(0);

    useEffect(() => {
        let cancelled = false;

        const sleep = (ms: number) =>
            new Promise<boolean>((resolve) => {
                setTimeout(() => resolve(!cancelled), ms);
            });

        const typeIntoInput = async (text: string) => {
            setInputText("");
            for (let i = 1; i <= text.length; i++) {
                if (!(await sleep(45 + Math.random() * 50))) return false;
                setInputText(text.slice(0, i));
            }
            return true;
        };

        const sendUserBubble = (text: string) => {
            const id = ++idRef.current;
            setMessages((m) => [...m, { id, side: "user", text, isTyping: false }]);
            setInputText("");
        };

        const showMayaTyping = () => {
            const id = ++idRef.current;
            setMessages((m) => [...m, { id, side: "maya", text: "", isTyping: true }]);
            return id;
        };

        const swapTypingForText = (typingId: number, text: string) => {
            setMessages((m) =>
                m.map((x) => (x.id === typingId ? { ...x, text, isTyping: false } : x))
            );
        };

        (async () => {
            while (!cancelled) {
                for (const ex of exchanges) {
                    if (!(await typeIntoInput(ex.user))) return;
                    if (!(await sleep(380))) return;
                    sendUserBubble(ex.user);
                    if (!(await sleep(550))) return;
                    const tid = showMayaTyping();
                    if (!(await sleep(1300 + Math.random() * 500))) return;
                    swapTypingForText(tid, ex.maya);
                    if (!(await sleep(1100))) return;
                }
                if (!(await sleep(1800))) return;
                setMessages([]);
                if (!(await sleep(700))) return;
            }
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="flex h-full flex-col bg-[#ebebeb]">
            <div className="flex items-center gap-2.5 px-4 pt-5 pb-2.5">
                <div
                    className={cn(
                        "flex size-8 items-center justify-center rounded-full",
                        "bg-[#EEBACB] text-sm font-medium text-white"
                    )}
                >
                    m
                </div>
                <div className="flex-1 leading-tight">
                    <p className="text-sm font-semibold text-neutral-900">maya</p>
                    <p className="text-[10px] text-neutral-500">online</p>
                </div>
            </div>
            <div className="mx-4 border-t border-neutral-300/60" />

            <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3 pt-3 pb-2">
                <AnimatePresence mode="popLayout" initial={false}>
                    {messages.map((m) => (
                        <motion.div
                            key={m.id}
                            layout="position"
                            initial={{ opacity: 0, y: 24, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{
                                opacity: 0,
                                scale: 0.94,
                                transition: { duration: 0.4, ease: "easeOut" },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 320,
                                damping: 30,
                                mass: 0.6,
                            }}
                            className={cn(
                                "max-w-[80%] rounded-2xl px-3 py-1.5",
                                "text-[11px] leading-snug text-neutral-900",
                                m.side === "user"
                                    ? "max-w-[78%] self-end bg-[#EEBACB]"
                                    : "self-start bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                            )}
                        >
                            {m.isTyping ? <TypingDots /> : m.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="px-3 pb-6">
                <div
                    className={cn(
                        "flex items-center gap-2 rounded-full",
                        "bg-white py-1 pr-1 pl-4",
                        "shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    )}
                >
                    <span className="flex-1 truncate text-[11px]">
                        {inputText ? (
                            <span className="text-neutral-900">
                                {inputText}
                                <BlinkingCaret />
                            </span>
                        ) : (
                            <span className="text-neutral-400 italic">message maya...</span>
                        )}
                    </span>
                    <span
                        aria-hidden
                        className="size-6 shrink-0 rounded-full bg-[#EEBACB] flex justify-center items-center text-neutral-800"
                    >
                        <LuArrowUp className="size-3" />
                    </span>
                </div>
            </div>
        </div>
    );
}

function TypingDots() {
    return (
        <div className="flex items-center gap-1 px-1 py-1">
            {[0, 0.18, 0.36].map((delay, i) => (
                <motion.span
                    key={i}
                    className="size-1.5 rounded-full bg-neutral-500"
                    animate={{ y: [0, -2.5, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

function BlinkingCaret() {
    return (
        <motion.span
            aria-hidden
            className="ml-0.5 inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        >
            |
        </motion.span>
    );
}
