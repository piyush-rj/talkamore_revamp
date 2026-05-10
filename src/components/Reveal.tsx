"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    /** Pixels of viewport edge offset before triggering. Negative = element must be more visible. */
    amount?: string;
}

export default function Reveal({ children, delay = 0, amount = "-80px" }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: amount }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay,
            }}
            style={{ willChange: "opacity, filter, transform" }}
        >
            {children}
        </motion.div>
    );
}
