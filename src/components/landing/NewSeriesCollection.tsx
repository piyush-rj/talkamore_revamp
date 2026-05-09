import Image from "next/image";
import { DotsHorizontalIcon } from "./icons";
import { newSeries } from "./data";

export default function NewSeriesCollection() {
    return (
        <section>
            <div className="flex items-center justify-between">
                <h3
                    className="text-[22px] font-semibold tracking-tight"
                    style={{ color: "#1B1B1B" }}
                >
                    New Series Collection
                </h3>
                <button
                    type="button"
                    aria-label="More options"
                    className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-black/5"
                >
                    <DotsHorizontalIcon className="h-5 w-5" style={{ color: "#9A938B" }} />
                </button>
            </div>

            <div className="mt-6 flex items-center gap-5">
                <div className="relative h-[88px] w-[100px] shrink-0">
                    <div
                        className="absolute left-0 top-0 h-[88px] w-[60px] overflow-hidden rounded-[4px]"
                        style={{
                            boxShadow: "0 10px 18px -6px rgba(40, 30, 15, 0.28)",
                        }}
                    >
                        <Image
                            src={newSeries.covers[0]}
                            alt=""
                            width={60}
                            height={88}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div
                        className="absolute left-9 top-0 h-[88px] w-[60px] overflow-hidden rounded-[4px]"
                        style={{
                            boxShadow: "0 10px 18px -6px rgba(40, 30, 15, 0.28)",
                        }}
                    >
                        <Image
                            src={newSeries.covers[1]}
                            alt=""
                            width={60}
                            height={88}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-between gap-4">
                    <div>
                        <p
                            className="text-[16px] font-medium leading-snug"
                            style={{ color: "#1B1B1B" }}
                        >
                            {newSeries.title}
                        </p>
                        <p className="mt-1 text-[13px] italic" style={{ color: "#9A938B" }}>
                            {newSeries.meta}
                        </p>
                    </div>
                    <span className="text-[15px] font-medium" style={{ color: "#1B1B1B" }}>
                        {newSeries.volumes}
                    </span>
                </div>
            </div>
        </section>
    );
}
