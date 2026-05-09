"use client";

import { useState, type JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowOutward, MdContentCopy, MdCheck } from "react-icons/md";
import { cn } from "../lib/utils";

type FooterLink = { name: string; href: string };

const PRODUCT_LINKS: readonly FooterLink[] = [
    { name: "start writing", href: "#" },
    { name: "meet maya", href: "#" },
    { name: "meet sage", href: "#" },
    { name: "meet theo", href: "#" },
    { name: "meet luna", href: "#" },
    { name: "how memory works", href: "#" },
    { name: "pricing", href: "#" },
    { name: "blog", href: "#" },
];

const HONEST_LINKS: readonly FooterLink[] = [
    { name: "who reads my messages", href: "#" },
    { name: "how to delete everything", href: "#" },
    { name: "model & infrastructure notes", href: "#" },
];

const CONTACT_EMAIL = "team@talkamore.com";

export default function LandingFooter(): JSX.Element {
    return (
        <footer className="relative w-full px-4 pb-4 sm:px-6 sm:pb-6">
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "rounded-[2rem] sm:rounded-[2.5rem]",
                    "bg-[#ece2c8]",
                    "pt-16 pb-10 sm:pt-20 sm:pb-12"
                )}
            >
                <NavGrid />
                <Divider />
                <BottomBar />
            </div>
        </footer>
    );
}

function NavGrid(): JSX.Element {
    return (
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            <LinkColumn label="the product" links={PRODUCT_LINKS} />
            <LinkColumn label="honest answers" links={HONEST_LINKS} />
            <SmallPrintColumn />
        </div>
    );
}

function LinkColumn({
    label,
    links,
}: {
    label: string;
    links: readonly FooterLink[];
}): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-y-4"
        >
            <ColumnHeader>{label}</ColumnHeader>
            <ul className="flex flex-col gap-y-3">
                {links.map((l) => (
                    <li key={l.name}>
                        <FooterLinkItem name={l.name} href={l.href} />
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

function SmallPrintColumn(): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-y-4"
        >
            <ColumnHeader>the small print</ColumnHeader>
            <ul className="flex flex-col gap-y-3">
                <li>
                    <FooterLinkItem name="privacy" href="/legal/privacy" />
                </li>
                <li>
                    <FooterLinkItem name="terms" href="/legal/terms" />
                </li>
                <li>
                    <ContactEmail />
                </li>
                <li>
                    <FooterLinkItem name="talk with the founder" href="#" />
                </li>
            </ul>
        </motion.div>
    );
}

function ColumnHeader({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <span
            className={cn(
                "text-[11px] font-medium tracking-[0.28em] uppercase italic",
                "text-[#7a6342]"
            )}
        >
            {children}
        </span>
    );
}

function FooterLinkItem({ name, href }: FooterLink): JSX.Element {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "group inline-flex items-center gap-x-1.5",
                "w-fit text-[15px] font-light tracking-tight",
                "text-[#2d2316]/80 hover:text-[#1a130a]",
                "transition-colors duration-300"
            )}
        >
            <span>{name}</span>
            <AnimatePresence initial={false}>
                {hovered && (
                    <motion.span
                        key="arrow"
                        initial={{ opacity: 0, x: -4, width: 0 }}
                        animate={{ opacity: 1, x: 0, width: "auto" }}
                        exit={{ opacity: 0, x: -4, width: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex overflow-hidden"
                    >
                        <MdArrowOutward className="size-3.5" />
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
}

function ContactEmail(): JSX.Element {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // clipboard API unavailable — fall back to mailto via the anchor
        }
    };

    return (
        <span className="inline-flex items-center gap-x-2">
            <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={cn(
                    "text-[15px] font-light tracking-tight",
                    "text-[#2d2316]/80 hover:text-[#1a130a]",
                    "transition-colors duration-300"
                )}
            >
                contact: {CONTACT_EMAIL}
            </a>
            <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? "email copied" : "copy email"}
                className={cn(
                    "relative size-5 shrink-0 rounded-md",
                    "text-[#7a6342] hover:text-[#1a130a]",
                    "transition-colors duration-300",
                    "cursor-pointer"
                )}
            >
                <AnimatePresence initial={false} mode="wait">
                    {copied ? (
                        <motion.span
                            key="check"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 grid place-items-center"
                        >
                            <MdCheck className="size-3.5" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="copy"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 grid place-items-center"
                        >
                            <MdContentCopy className="size-3.5" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </span>
    );
}

function Divider(): JSX.Element {
    return (
        <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
            className="my-12 h-px bg-[#3d2f1c]/15 sm:my-14"
        />
    );
}

function BottomBar(): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start justify-between gap-y-4 sm:flex-row sm:items-end"
        >
            <span
                className={cn(
                    "inline-flex items-baseline gap-x-0.5",
                    "text-2xl font-medium tracking-tight text-[#2d2316] sm:text-3xl"
                )}
            >
                talkamore<span className="text-[#a3493a]">.</span>
            </span>
            <span className="text-xs font-light tracking-[0.18em] text-[#7a6342]/80">
                © 2026 talkamore.com
            </span>
        </motion.div>
    );
}
