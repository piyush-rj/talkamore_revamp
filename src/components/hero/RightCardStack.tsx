"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

type Slot = { x: number; y: number; rotate: number; scale: number; zIndex: number };

// [back, middle, front]
const SLOTS: Slot[] = [
    { x: -6, y: 18, rotate: -9, scale: 0.93, zIndex: 1 },
    { x: -2, y: 9, rotate: -4, scale: 0.97, zIndex: 2 },
    { x: 4, y: 0, rotate: 3, scale: 1, zIndex: 3 },
];

const MAYA_MEMORIES = [
    "you were anxious about Friday's call — how'd it go?",
    "you mentioned your mom's birthday next week — got the gift sorted?",
    "the book you wanted to start — did you pick it up yet?",
    "you said sleep felt off on Sunday. how was last night?",
];

const THEO_INSIGHTS = [
    "You sound lighter on days you walk in the morning.",
    "Tuesdays seem to drain you more than any other day.",
    "Your week feels calmer when you call your mom on Sunday.",
    "You've stopped mentioning the deadline — feeling steadier?",
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const JOURNAL_ENTRIES = [
    "Walked before dawn today. The city felt soft, like it hadn't woken up yet.",
    "Had coffee alone and realized how much I'd been needing the quiet.",
    "Started a list of things I want to stop apologizing for. It got long fast.",
    "Saw an old friend after years. Felt like no time had passed at all.",
    "The light through the kitchen window this morning. That's all. Just the light.",
];

function pick<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomJournalMeta() {
    return {
        day: pick(DAYS),
        date: `${Math.floor(Math.random() * 28) + 1} ${pick(MONTHS)}`,
        entry: pick(JOURNAL_ENTRIES),
    };
}

const MAYA_ID = 0;
const THEO_ID = 1;
const JOURNAL_ID = 2;

export default function RightCardStack() {
    // [back, middle, front]
    const [order, setOrder] = useState<number[]>([JOURNAL_ID, THEO_ID, MAYA_ID]);
    const [exitingId, setExitingId] = useState<number | null>(null);

    const [mayaIdx, setMayaIdx] = useState(0);
    const [theoIdx, setTheoIdx] = useState(0);
    const [journalMeta, setJournalMeta] = useState({
        day: "Tuesday",
        date: "14 Mar",
        entry: JOURNAL_ENTRIES[0],
    });
    const [twKey, setTwKey] = useState(0);

    const handleNext = () => {
        const frontId = order[2];
        const newFrontId = order[1]; // after rotation, the previous middle becomes front
        setExitingId(frontId);
        setOrder(([back, middle, front]) => [front, back, middle]);

        if (newFrontId === MAYA_ID) {
            setMayaIdx((i) => (i + 1) % MAYA_MEMORIES.length);
        } else if (newFrontId === THEO_ID) {
            setTheoIdx((i) => (i + 1) % THEO_INSIGHTS.length);
        } else if (newFrontId === JOURNAL_ID) {
            setJournalMeta(randomJournalMeta());
        }
        setTwKey((k) => k + 1);

        window.setTimeout(() => setExitingId((cur) => (cur === frontId ? null : cur)), 650);
    };

    return (
        <div className="relative min-h-88">
            {order.map((cardId, slotIdx) => {
                const slot = SLOTS[slotIdx];
                const isExiting = exitingId === cardId && slotIdx === 0;
                const isFront = slotIdx === 2 && !isExiting;
                return (
                    <motion.div
                        key={cardId}
                        className="absolute inset-0"
                        style={{ zIndex: slot.zIndex }}
                        animate={
                            isExiting
                                ? {
                                      x: [140, slot.x],
                                      y: [SLOTS[2].y, slot.y],
                                      rotate: [22, slot.rotate],
                                      scale: [1, slot.scale],
                                      opacity: [0.4, 1],
                                  }
                                : {
                                      x: slot.x,
                                      y: slot.y,
                                      rotate: slot.rotate,
                                      scale: slot.scale,
                                      opacity: 1,
                                  }
                        }
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {cardId === MAYA_ID && (
                            <MayaCard
                                onNext={handleNext}
                                text={MAYA_MEMORIES[mayaIdx]}
                                isFront={isFront}
                                twKey={twKey}
                            />
                        )}
                        {cardId === THEO_ID && (
                            <TheoCard
                                onNext={handleNext}
                                text={THEO_INSIGHTS[theoIdx]}
                                isFront={isFront}
                                twKey={twKey}
                            />
                        )}
                        {cardId === JOURNAL_ID && (
                            <JournalCard
                                onNext={handleNext}
                                meta={journalMeta}
                                isFront={isFront}
                                twKey={twKey}
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}

function NextButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            aria-label="Next card"
            className={cn(
                "flex h-5 w-5 items-center justify-center",
                "rounded-full bg-neutral-900 text-white",
                "shadow-sm",
                "transition-transform hover:scale-105 active:scale-90"
            )}
        >
            <FiChevronRight className="size-3" />
        </button>
    );
}

function Typewriter({
    text,
    speed = 35,
    caretClass,
}: {
    text: string;
    speed?: number;
    caretClass?: string;
}) {
    const [shown, setShown] = useState("");
    useEffect(() => {
        let i = 0;
        const id = window.setInterval(() => {
            i += 1;
            setShown(text.slice(0, i));
            if (i >= text.length) window.clearInterval(id);
        }, speed);
        return () => window.clearInterval(id);
    }, [text, speed]);
    return (
        <span>
            {shown}
            <span
                className={cn(
                    "ml-0.5 inline-block align-middle",
                    "h-[0.95em] w-[1.5px]",
                    "animate-pulse",
                    caretClass ?? "bg-neutral-700"
                )}
            />
        </span>
    );
}

function Body({
    text,
    isFront,
    twKey,
    className,
    caretClass,
}: {
    text: string;
    isFront: boolean;
    twKey: number;
    className?: string;
    caretClass?: string;
}) {
    return (
        <div className={className}>
            {isFront ? <Typewriter key={twKey} text={text} caretClass={caretClass} /> : text}
        </div>
    );
}

function MayaCard({
    onNext,
    text,
    isFront,
    twKey,
}: {
    onNext: () => void;
    text: string;
    isFront: boolean;
    twKey: number;
}) {
    return (
        <div
            className={cn(
                "h-full w-full",
                "flex flex-col",
                "rounded-3xl bg-white p-5",
                "ring-1 ring-neutral-200/80",
                "shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span
                        className={cn(
                            "inline-flex size-4 items-center justify-center",
                            "rounded-full bg-rose-400"
                        )}
                    >
                        <span className="block size-1.5 rounded-full bg-white" />
                    </span>
                    <span className="text-xs font-medium text-neutral-700">Maya</span>
                </div>
                <NextButton onClick={onNext} />
            </div>

            <div className="mt-4">
                <div className="text-[11px] text-neutral-500">Remembered:</div>
                <Body
                    text={text}
                    isFront={isFront}
                    twKey={twKey}
                    className="mt-1 text-base font-semibold leading-snug text-neutral-900"
                    caretClass="bg-neutral-700"
                />
            </div>

            <div className="mt-auto pt-6">
                <div className="text-sm font-medium text-neutral-800">Tuesday, 14 Mar</div>
                <div className="mt-0.5 text-[11px] text-neutral-500">
                    9:23 PM · from 6 prior chats
                </div>
            </div>
        </div>
    );
}

function TheoCard({
    onNext,
    text,
    isFront,
    twKey,
}: {
    onNext: () => void;
    text: string;
    isFront: boolean;
    twKey: number;
}) {
    return (
        <div
            className={cn(
                "h-full w-full",
                "flex flex-col",
                "rounded-3xl p-5",
                "bg-linear-to-br from-orange-300 to-amber-400",
                "ring-1 ring-orange-200",
                "shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span
                        className={cn(
                            "inline-flex size-4 items-center justify-center",
                            "rounded-full bg-white/80"
                        )}
                    >
                        <span className="block size-1.5 rounded-full bg-amber-700" />
                    </span>
                    <span className="text-xs font-semibold text-neutral-800">Theo</span>
                </div>
                <NextButton onClick={onNext} />
            </div>

            <div className="mt-4">
                <div className="text-[11px] uppercase tracking-wide text-amber-950/70">Insight</div>
                <Body
                    text={text}
                    isFront={isFront}
                    twKey={twKey}
                    className="mt-1 text-base font-semibold leading-snug text-amber-950"
                    caretClass="bg-amber-900"
                />
            </div>

            <div className="mt-auto pt-6">
                <div className="text-sm font-medium text-amber-950">Pattern · last 14 days</div>
                <div className="mt-0.5 text-[11px] text-amber-950/70">noticed across 9 chats</div>
            </div>
        </div>
    );
}

function JournalCard({
    onNext,
    meta,
    isFront,
    twKey,
}: {
    onNext: () => void;
    meta: { day: string; date: string; entry: string };
    isFront: boolean;
    twKey: number;
}) {
    return (
        <div
            className={cn(
                "h-full w-full",
                "flex flex-col",
                "rounded-3xl bg-violet-50 p-5",
                "ring-1 ring-violet-100",
                "shadow-[0_8px_22px_rgba(0,0,0,0.05)]"
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="inline-block size-3.5 rounded-full bg-violet-400" />
                    <span className="text-xs font-medium text-neutral-700">Journal</span>
                </div>
                <NextButton onClick={onNext} />
            </div>

            <div className="mt-4">
                <div className="text-[11px] text-violet-700/80">
                    {meta.day} · {meta.date}
                </div>
                <Body
                    text={meta.entry}
                    isFront={isFront}
                    twKey={twKey}
                    className="mt-1.5 text-[13px] leading-relaxed text-violet-950"
                    caretClass="bg-violet-700"
                />
            </div>
        </div>
    );
}
