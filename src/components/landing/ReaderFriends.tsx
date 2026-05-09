import Image from "next/image";
import { CheckIcon, DotsHorizontalIcon } from "./icons";
import { friendComments } from "./data";

export default function ReaderFriends() {
    return (
        <section>
            <div className="flex items-center justify-between">
                <h3
                    className="text-[22px] font-semibold tracking-tight"
                    style={{ color: "#1B1B1B" }}
                >
                    Reader Friends
                </h3>
                <button
                    type="button"
                    aria-label="More options"
                    className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-black/5"
                >
                    <DotsHorizontalIcon className="h-5 w-5" style={{ color: "#9A938B" }} />
                </button>
            </div>

            <ul className="mt-6 flex flex-col">
                {friendComments.map((entry, idx) => {
                    const isLast = idx === friendComments.length - 1;
                    return (
                        <li key={entry.name} className="relative flex gap-4 pb-8">
                            {!isLast && (
                                <span
                                    aria-hidden
                                    className="absolute left-6 top-12 h-full w-px"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(#D5CCB6 60%, transparent 0%)",
                                        backgroundSize: "1px 6px",
                                        backgroundRepeat: "repeat-y",
                                    }}
                                />
                            )}
                            <Image
                                src={entry.avatar}
                                alt={entry.name}
                                width={48}
                                height={48}
                                className="relative z-10 h-12 w-12 shrink-0 rounded-full object-cover"
                                style={{ border: "2px solid #FFFFFF" }}
                            />
                            <div className="flex-1">
                                <p
                                    className="text-[15px] font-semibold"
                                    style={{ color: "#1B1B1B" }}
                                >
                                    {entry.name}
                                </p>
                                <p
                                    className="mt-1 text-[14px] leading-[1.55] italic"
                                    style={{ color: "#5C5A55" }}
                                >
                                    {entry.comment}
                                </p>
                                <div className="mt-3 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <CheckIcon
                                            className="h-4 w-4"
                                            style={{ color: "#A8453A" }}
                                        />
                                        <span
                                            className="text-[13px] line-through"
                                            style={{ color: "#A8453A" }}
                                        >
                                            {entry.chapter}
                                        </span>
                                    </div>
                                    <span className="text-[12px]" style={{ color: "#9A938B" }}>
                                        {entry.timeAgo}
                                    </span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
