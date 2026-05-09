"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Faq = {
    question: string;
    answer: string;
};

const faqs: Faq[] = [
    {
        question: "who reads my messages?",
        answer: "nobody. your conversations are stored encrypted at rest (AES-256-GCM, per-user keys) and used only to build your own memory. they're not training data. they're not shared. they're not sold.",
    },
    {
        question: "do they actually remember everything?",
        answer: "yes. the whole point. mention your sister once, and six months from now the name comes back up on its own.",
    },
    {
        question: "do i need to install anything?",
        answer: "no. it runs right here in the browser. no app store, no download, no separate login. open a tab and start.",
    },
    {
        question: "is this just chatgpt with a wrapper?",
        answer: "no. it runs on a large language model under the hood, but the personality, the memory, and the rhythm of the conversation are built from scratch. the voice behaves nothing like chatgpt in practice. no lists, no disclaimers, no “as an ai,” no amnesia. it names patterns from a curated library of psychological frameworks (cognitive distortions, attachment loops, decision fatigue). that's what you can't get from a generic prompt.",
    },
    {
        question: "does it reply instantly, like a bot?",
        answer: "no. it takes a beat. sometimes a long one. you won't get a five-paragraph reply three seconds after you send something raw.",
    },
    {
        question: "is this another locked-down chatgpt?",
        answer: "no. talkamore is built on a model that doesn't flatten your input through guardrails when the topic gets real. the depth is the product.",
    },
    {
        question: "what does it cost?",
        answer: "one-time payment. free to start. no subscription.",
    },
    {
        question: "can i delete everything?",
        answer: "yes, any time. one command and everything is forgotten. no recovery, no support ticket.",
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
                className="group flex w-full items-start justify-between gap-8 py-7 text-left transition-colors duration-300 hover:text-neutral-500 sm:py-8"
            >
                <div className="flex items-start gap-6 sm:gap-10">
                    <span className="mt-1 font-mono text-xs font-light tracking-[0.2em] text-neutral-400 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-light tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-500 sm:text-xl">
                        {faq.question}
                    </h3>
                </div>

                <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-2 size-4 shrink-0 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900"
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
                            className="max-w-2xl pr-6 pb-8 pl-[3.25rem] text-base font-light leading-relaxed text-neutral-600 sm:pl-[4.25rem] sm:text-lg"
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
            <div className="mx-auto max-w-5xl px-6 py-32 sm:px-10 sm:py-40">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-20 text-center sm:mb-24"
                >
                    <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
                        questions
                    </p>
                    <h2 className="mt-4 text-3xl font-light tracking-tight text-neutral-900 sm:text-5xl">
                        the things people <span className="italic">actually ask.</span>
                    </h2>
                </motion.div>

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

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 text-center text-sm font-light text-neutral-500 italic sm:mt-20"
                >
                    still wondering something? just open a tab and ask it directly.
                </motion.p>
            </div>
        </section>
    );
}
