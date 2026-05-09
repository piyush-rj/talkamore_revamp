"use client";

import {
    motion,
    useMotionTemplate,
    useScroll,
    useSpring,
    useTransform,
    type MotionValue,
} from "framer-motion";
import { MeshGradient, Metaballs, Voronoi, Warp } from "@paper-design/shaders-react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Voice = {
    name: string;
    tagline: string;
    bullets: string[];
    sample: string;
    bloom: string;
    renderShader: () => ReactNode;
};

const fillStyle = { width: "100%", height: "100%" } as const;

const voices: Voice[] = [
    {
        name: "maya",
        tagline: "the one who pays attention",
        bullets: [
            "notices what you didn’t say.",
            "names the gap between word and action, warmly.",
            "remembers what you mentioned in passing last tuesday.",
        ],
        sample: "you said “i’m fine” twice in this message. are you?",
        bloom: "#d9a7c9",
        renderShader: () => (
            <MeshGradient
                colors={["#fde2e7", "#f8b4cf", "#c084fc", "#7c3aed"]}
                distortion={1}
                swirl={0.85}
                grainMixer={0.15}
                grainOverlay={0.08}
                speed={1.6}
                style={fillStyle}
                minPixelRatio={1}
                maxPixelCount={90000}
            />
        ),
    },
    {
        name: "sage",
        tagline: "the one who slows you down",
        bullets: [
            "patient. takes a beat before answering.",
            "asks what’s underneath the surface.",
            "leaves silence when silence is the right answer.",
        ],
        sample: "take a breath. then tell me again.",
        bloom: "#7fc1ad",
        renderShader: () => (
            <Warp
                colors={["#e6f4ee", "#7fc1ad", "#0f766e", "#064e3b"]}
                shape="stripes"
                rotation={0.6}
                proportion={0.5}
                softness={0.9}
                shapeScale={0.45}
                distortion={0.55}
                swirl={0.7}
                swirlIterations={5}
                speed={1.4}
                style={fillStyle}
                minPixelRatio={1}
                maxPixelCount={90000}
            />
        ),
    },
    {
        name: "theo",
        tagline: "the one who names the shape",
        bullets: [
            "names the architecture, not just the feeling.",
            "dry, structural. gives you back a clearer picture.",
            "finds the thing that’s actually loud underneath.",
        ],
        sample: "three weeks of carrying it. the call is still there.",
        bloom: "#b89a78",
        renderShader: () => (
            <Voronoi
                colors={["#f5ead8", "#d6c4a8", "#8b6f4e", "#3f2d1a"]}
                colorGap="#1f150b"
                colorGlow="#f5ead8"
                stepsPerColor={2}
                distortion={0.5}
                gap={0.04}
                glow={0.35}
                scale={1.5}
                speed={1.5}
                style={fillStyle}
                minPixelRatio={1}
                maxPixelCount={90000}
            />
        ),
    },
    {
        name: "luna",
        tagline: "the one who says it",
        bullets: [
            "no cushion. no “have you considered”.",
            "roasts the excuse, not the person.",
            "stays after she says the hard thing.",
        ],
        sample: "“it’s complicated” is doing a lot of work in that sentence.",
        bloom: "#e0379b",
        renderShader: () => (
            <Metaballs
                colors={["#fbcfe8", "#f472b6", "#e0379b", "#581c87"]}
                colorBack="#3b0a4d"
                count={6}
                size={1.1}
                speed={1.8}
                style={fillStyle}
                minPixelRatio={1}
                maxPixelCount={90000}
            />
        ),
    },
];

const HOLD_RATIO = 1.2;

function voiceTimings(index: number, total: number) {
    const transition = 1 / (HOLD_RATIO * total + total - 1);
    const dwell = transition * HOLD_RATIO;
    const slot = dwell + transition;
    const holdStart = index * slot;
    const holdEnd = holdStart + dwell;
    return {
        enterStart: Math.max(holdStart - transition, 0),
        holdStart,
        holdEnd,
        exitEnd: Math.min(holdEnd + transition, 1),
    };
}

function VoicePanel({
    voice,
    index,
    total,
    progress,
}: {
    voice: Voice;
    index: number;
    total: number;
    progress: MotionValue<number>;
}) {
    const isFirst = index === 0;
    const isLast = index === total - 1;
    const { enterStart, holdStart, holdEnd, exitEnd } = voiceTimings(index, total);

    const range = isFirst
        ? [holdStart, holdEnd, exitEnd]
        : isLast
          ? [enterStart, holdStart, holdEnd]
          : [enterStart, holdStart, holdEnd, exitEnd];

    const xRange = isFirst
        ? ["0%", "0%", "-60%"]
        : isLast
          ? ["60%", "0%", "0%"]
          : ["60%", "0%", "0%", "-60%"];
    const opRange = isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0];
    const scaleRange = isFirst ? [1, 1, 0.7] : isLast ? [0.85, 1, 1] : [0.85, 1, 1, 0.7];

    const x = useTransform(progress, range, xRange);
    const opacity = useTransform(progress, range, opRange);
    const scale = useTransform(progress, range, scaleRange);

    return (
        <motion.div
            style={{ x, opacity, scale }}
            className={cn(
                "absolute inset-0 flex items-center justify-center",
                "px-6 pt-44 pb-16",
                "will-change-transform",
                "sm:pt-52 sm:pb-20"
            )}
        >
            <div className="flex w-full max-w-xl flex-col items-center text-center">
                <div className="relative">
                    <div
                        className="size-48 overflow-hidden rounded-full sm:size-56"
                        style={{
                            boxShadow:
                                "0 40px 120px -20px rgba(15, 15, 20, 0.35), inset 0 -30px 60px -20px rgba(0, 0, 0, 0.35), inset 0 20px 40px -10px rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        {voice.renderShader()}
                    </div>
                    <div
                        aria-hidden
                        className="absolute -inset-12 -z-10 rounded-full opacity-60 blur-3xl"
                        style={{
                            background: `radial-gradient(circle, ${voice.bloom}55 0%, transparent 60%)`,
                        }}
                    />
                </div>

<<<<<<< HEAD
                <h2
                    className={cn(
                        "mt-12",
                        "text-4xl font-light tracking-tight italic",
                        "text-neutral-900",
                        "sm:text-5xl"
                    )}
                >
=======
                <h2 className="mt-10 text-4xl font-medium tracking-tight text-neutral-900 italic sm:text-5xl">
>>>>>>> 89adab7 (added faq)
                    {voice.name}
                </h2>
                <p className="mt-3 text-sm font-light text-neutral-500 sm:text-base">
                    {voice.tagline}
                </p>

                <ul className="mt-8 space-y-1.5 text-sm font-light text-neutral-600 sm:text-base">
                    {voice.bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>

                <p
                    className={cn(
                        "mt-8 px-5 py-2.5",
                        "rounded-full border border-neutral-200/80",
                        "bg-white/70 backdrop-blur",
                        "text-sm font-light text-neutral-700 italic",
                        "shadow-sm",
                        "sm:text-base"
                    )}
                >
                    {voice.sample}
                </p>
            </div>
        </motion.div>
    );
}

function ProgressDot({
    index,
    total,
    progress,
}: {
    index: number;
    total: number;
    progress: MotionValue<number>;
}) {
    const isFirst = index === 0;
    const isLast = index === total - 1;
    const { enterStart, holdStart, holdEnd, exitEnd } = voiceTimings(index, total);

    const range = isFirst
        ? [holdStart, holdEnd, exitEnd]
        : isLast
          ? [enterStart, holdStart, holdEnd]
          : [enterStart, holdStart, holdEnd, exitEnd];
    const wRange = isFirst ? [22, 22, 6] : isLast ? [6, 22, 22] : [6, 22, 22, 6];
    const opRange = isFirst ? [1, 1, 0.25] : isLast ? [0.25, 1, 1] : [0.25, 1, 1, 0.25];

    const w = useTransform(progress, range, wRange);
    const opacity = useTransform(progress, range, opRange);
    const width = useMotionTemplate`${w}px`;
    return <motion.div style={{ width, opacity }} className="h-1 rounded-full bg-neutral-900" />;
}

export default function LandingVoicesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 220,
        damping: 40,
        mass: 0.4,
    });

    return (
        <section
            ref={ref}
            style={{ height: `${voices.length * 200}vh` }}
            className="relative bg-white"
        >
            <div
                className={cn(
                    "sticky top-0 flex h-screen w-full",
                    "items-center justify-center",
                    "overflow-hidden bg-white"
                )}
            >
                <div
                    className={cn(
                        "pointer-events-none",
                        "absolute top-20 left-1/2 z-20 -translate-x-1/2",
                        "text-center",
                        "sm:top-24"
                    )}
                >
                    <p
                        className={cn(
                            "text-xs font-medium tracking-[0.25em] uppercase",
                            "text-neutral-400"
                        )}
                    >
                        voices
                    </p>
                    <h1
                        className={cn(
                            "mt-3",
                            "text-2xl font-light tracking-tight",
                            "text-neutral-900",
                            "sm:text-3xl"
                        )}
                    >
                        pick the voice <span className="italic">you need today.</span>
                    </h1>
                </div>

                {voices.map((voice, i) => (
                    <VoicePanel
                        key={voice.name}
                        voice={voice}
                        index={i}
                        total={voices.length}
                        progress={smoothProgress}
                    />
                ))}

                <div
                    className={cn(
                        "pointer-events-none",
                        "absolute bottom-10 left-1/2 z-20 -translate-x-1/2",
                        "flex items-center gap-2"
                    )}
                >
                    {voices.map((_, i) => (
                        <ProgressDot
                            key={i}
                            index={i}
                            total={voices.length}
                            progress={smoothProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
