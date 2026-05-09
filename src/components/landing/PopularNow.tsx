import { DotsHorizontalIcon } from "./icons";
import { personas } from "./data";

export default function PopularNow() {
    return (
        <section>
            <div className="flex items-center justify-between">
                <h3
                    className="text-[22px] font-semibold tracking-tight"
                    style={{ color: "#1B1B1B" }}
                >
                    pick a voice
                </h3>
                <button
                    type="button"
                    aria-label="More options"
                    className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-black/5"
                >
                    <DotsHorizontalIcon className="h-5 w-5" style={{ color: "#9A938B" }} />
                </button>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {personas.map((p) => (
                    <li
                        key={p.name}
                        className="flex flex-col rounded-2xl p-4"
                        style={{
                            backgroundColor: "#FBF7EB",
                            border: "1px solid #E0D6BE",
                            boxShadow:
                                "0 14px 24px -12px rgba(40, 30, 15, 0.18), 0 2px 6px -2px rgba(40, 30, 15, 0.08)",
                        }}
                    >
                        <div
                            className="mx-auto h-20 w-20 rounded-full"
                            style={{
                                backgroundImage: `radial-gradient(circle at 32% 30%, ${p.orbHighlight} 0%, ${p.orbMid} 45%, ${p.orbDeep} 100%)`,
                                boxShadow:
                                    "inset 0 -6px 10px rgba(0,0,0,0.18), inset 0 4px 8px rgba(255,255,255,0.25), 0 6px 12px -6px rgba(40, 30, 15, 0.35)",
                            }}
                        />
                        <p
                            className="mt-4 text-[18px] font-medium italic"
                            style={{ color: "#1B1B1B" }}
                        >
                            {p.name}
                        </p>
                        <p
                            className="mt-1 text-[12px] italic leading-snug"
                            style={{ color: "#9A938B" }}
                        >
                            {p.tagline}
                        </p>
                        <ul
                            className="mt-3 flex flex-col gap-1.5 text-[12px] leading-snug"
                            style={{ color: "#5C5A55" }}
                        >
                            {p.bullets.map((b) => (
                                <li key={b} className="flex gap-1.5">
                                    <span aria-hidden>·</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        <p
                            className="mt-3 rounded-md px-3 py-2 text-[11px] italic leading-snug"
                            style={{
                                backgroundColor: "#F5EFE0",
                                color: "#5C5A55",
                                border: "1px solid #E8DFC8",
                            }}
                        >
                            {p.quote}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {p.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full px-2.5 py-1 text-[11px]"
                                    style={{
                                        backgroundColor: "#F5EFE0",
                                        color: "#5C5A55",
                                        border: "1px solid #E8DFC8",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
