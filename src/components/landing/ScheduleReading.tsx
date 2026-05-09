import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { scheduleDays } from "./data";

export default function ScheduleReading() {
    return (
        <section>
            <div className="flex items-center justify-between">
                <h3
                    className="text-[22px] font-semibold tracking-tight"
                    style={{ color: "#1B1B1B" }}
                >
                    Schedule Reading
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label="Previous week"
                        className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-black/5"
                    >
                        <ChevronLeftIcon className="h-5 w-5" style={{ color: "#1B1B1B" }} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next week"
                        className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-black/5"
                    >
                        <ChevronRightIcon className="h-5 w-5" style={{ color: "#1B1B1B" }} />
                    </button>
                </div>
            </div>

            <ul className="mt-6 grid grid-cols-7 gap-1">
                {scheduleDays.map((day) => (
                    <li key={day.label} className="flex flex-col items-center">
                        <span
                            className="text-[13px] font-medium"
                            style={{ color: day.accent ? "#A8453A" : "#5C5A55" }}
                        >
                            {day.label}
                        </span>
                        <span
                            className="mt-3 grid h-10 w-10 place-items-center rounded-full text-[16px] font-medium"
                            style={{
                                backgroundColor: day.selected ? "#D9CFB8" : "transparent",
                                color: day.accent ? "#A8453A" : "#1B1B1B",
                            }}
                        >
                            {day.date}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
