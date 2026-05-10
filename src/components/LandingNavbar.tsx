"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AppLogo from "./navbar/AppLogo";

const navLinks = [
    { label: "Memory", href: "#memory" },
    { label: "Personas", href: "#personas" },
    { label: "Faq", href: "#faq" },
];

export default function LandingNavbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-1/2 z-30 -translate-x-1/2",
                "mx-auto w-full max-w-6xl",
                "bg-white",
                "transition-[height,border-color] duration-300 ease-out will-change-[height]",
                scrolled ? "border-b border-black/10 h-16" : "border-b border-transparent h-16"
            )}
        >
            <div className="flex h-full w-full items-center justify-between px-6">
                <Link href="/" className="text-xl font-semibold tracking-tight text-neutral-900">
                    <AppLogo />
                </Link>

                <div className="flex items-center gap-9">
                    <ul className="flex items-center gap-8 text-[14.5px] text-neutral-700">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-neutral-950"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#start"
                        className={cn(
                            "group inline-flex select-none items-center gap-1",
                            "rounded-sm px-3.5 py-1.5",
                            "text-[13px] font-medium text-white",
                            "bg-linear-to-b from-neutral-700 to-neutral-950",
                            "ring-1 ring-black/60",
                            "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.45),0_1px_2px_0_rgba(0,0,0,0.4),0_4px_10px_-2px_rgba(0,0,0,0.35)]",
                            "transition-transform duration-150 ease-out",
                            "active:translate-y-px"
                        )}
                    >
                        Start Writing
                        <ChevronRight
                            className={cn(
                                "size-3.5 text-white/55",
                                "transition-transform duration-150",
                                "group-hover:translate-x-0.5"
                            )}
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
