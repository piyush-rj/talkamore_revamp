"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LandingCtaSection() {
    const [value, setValue] = useState("");

    return (
        <section className="w-screen bg-white px-6 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-neutral-950"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[url('/images/bg-flower.png')] bg-cover bg-center opacity-60"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.85)_90%)]"
                />

                <div className="relative flex flex-col items-center px-8 py-24 text-center sm:px-16 sm:py-32">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase"
                    >
                        begin
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                        className="mt-5 text-4xl leading-[1.1] font-light tracking-tight text-white sm:text-6xl"
                    >
                        {"what's the thing"}
                        <br />
                        {"you'd want "}
                        <span className="italic">named first.</span>
                    </motion.h2>

                    <motion.form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log("cta submit:", value);
                        }}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                        className="mt-12 flex w-full max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pr-1.5 pl-6 backdrop-blur-md transition-colors duration-300 focus-within:border-white/30 focus-within:bg-white/10"
                    >
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="a name, a person, a moment..."
                            className="flex-1 bg-transparent py-2 text-base font-light text-white placeholder:text-neutral-500 focus:outline-none sm:text-lg"
                            aria-label="what would you want named first"
                        />
                        <button
                            type="submit"
                            aria-label="send"
                            className="group flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform duration-300 hover:scale-105 active:scale-95"
                        >
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mt-8 flex items-center gap-4 text-xs tracking-[0.2em] text-neutral-500 uppercase"
                    >
                        <span className="h-px w-8 bg-white/15" />
                        or
                        <span className="h-px w-8 bg-white/15" />
                    </motion.div>

                    <motion.button
                        type="button"
                        onClick={() => console.log("start writing")}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                        className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-white py-3 pr-5 pl-6 text-base font-light text-neutral-900 transition-all duration-300 hover:bg-neutral-100 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-[0.98] sm:text-lg"
                    >
                        start writing
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </motion.div>

            {/* <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mt-10 max-w-6xl text-center text-sm font-light text-neutral-500 italic"
            >
                free to start. one-time, no signup.
            </motion.p> */}
        </section>
    );
}
