"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ComponentType } from "react";
import {
    PiShieldCheckFill,
    PiBrainFill,
    PiGlobeFill,
    PiSparkleFill,
    PiHourglassFill,
    PiFlameFill,
    PiTagFill,
    PiTrashFill,
} from "react-icons/pi";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

type Faq = {
    question: string;
    answer: string;
    Icon: ComponentType<{ className?: string }>;
};

const faqs: Faq[] = [
    {
        question: "who reads my messages?",
        answer: "nobody. your conversations are stored encrypted at rest (AES-256-GCM, per-user keys) and used only to build your own memory. they're not training data. they're not shared. they're not sold.",
        Icon: PiShieldCheckFill,
    },
    {
        question: "do they actually remember everything?",
        answer: "yes. the whole point. mention your sister once, and six months from now the name comes back up on its own.",
        Icon: PiBrainFill,
    },
    {
        question: "do i need to install anything?",
        answer: "no. it runs right here in the browser. no app store, no download, no separate login. open a tab and start.",
        Icon: PiGlobeFill,
    },
    {
        question: "is this just chatgpt with a wrapper?",
        answer: "no. it runs on a large language model under the hood, but the personality, the memory, and the rhythm of the conversation are built from scratch. the voice behaves nothing like chatgpt in practice. no lists, no disclaimers, no “as an ai,” no amnesia. it names patterns from a curated library of psychological frameworks (cognitive distortions, attachment loops, decision fatigue). that's what you can't get from a generic prompt.",
        Icon: PiSparkleFill,
    },
    {
        question: "does it reply instantly, like a bot?",
        answer: "no. it takes a beat. sometimes a long one. you won't get a five-paragraph reply three seconds after you send something raw.",
        Icon: PiHourglassFill,
    },
    {
        question: "is this another locked-down chatgpt?",
        answer: "no. talkamore is built on a model that doesn't flatten your input through guardrails when the topic gets real. the depth is the product.",
        Icon: PiFlameFill,
    },
    {
        question: "what does it cost?",
        answer: "one-time payment. free to start. no subscription.",
        Icon: PiTagFill,
    },
    {
        question: "can i delete everything?",
        answer: "yes, any time. one command and everything is forgotten. no recovery, no support ticket.",
        Icon: PiTrashFill,
    },
];

function FaqItem({
    faq,
    index,
    isOpen,
    onToggle,
}: {
    faq: Faq;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const { Icon } = faq;
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-neutral-200/80"
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className={cn(
                    "group flex w-full items-center justify-between gap-6",
                    "py-4 sm:py-6",
                    "cursor-pointer text-left"
                )}
            >
                <div className="flex items-center gap-4 sm:gap-5">
                    <Icon
                        className={cn(
                            "size-5 shrink-0 text-neutral-800",
                            "transition-colors duration-300",
                            "group-hover:text-neutral-900"
                        )}
                    />
                    <h3
                        className={cn(
                            "text-lg font-light tracking-tight",
                            "text-neutral-700",
                            "transition-colors duration-300",
                            "group-hover:text-black",
                            "sm:text-xl"
                        )}
                    >
                        {faq.question}
                    </h3>
                </div>

                <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                        "relative size-4 shrink-0 text-neutral-400",
                        "transition-colors duration-300",
                        "group-hover:text-neutral-900"
                    )}
                >
                    <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.35, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                    >
                        <motion.p
                            initial={{ y: -6 }}
                            animate={{ y: 0 }}
                            exit={{ y: -6 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className={cn(
                                "max-w-2xl pr-6 pb-6 pl-[2.4rem] sm:pl-[2.6rem]",
                                "text-base font-light leading-relaxed text-neutral-600",
                                "sm:text-lg"
                            )}
                        >
                            {faq.answer}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function LandingFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-5xl px-6 py-32 sm:px-10 sm:py-20">
                <SectionHeader title="questions" description="the things people actually ask." />

                <div className="border-b border-neutral-200/80">
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={faq.question}
                            faq={faq}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>

                {/* <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={cn(
                        "mt-16 sm:mt-20",
                        "text-center text-sm font-light italic",
                        "text-neutral-500"
                    )}
                >
                    still wondering something? just open a tab and ask it directly.
                </motion.p> */}
            </div>
        </section>
    );
}
