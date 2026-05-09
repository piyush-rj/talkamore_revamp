import { ArrowUpRightIcon } from "./icons";
import { currentUser } from "./data";

export default function HeroLeft() {
    return (
        <div className="max-w-md">
            <h1
                className="text-[56px] font-semibold leading-[1.05] tracking-tight md:text-[64px]"
                style={{ color: "#1B1B1B" }}
            >
                Happy reading,
                <br />
                {currentUser.firstName}
            </h1>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.6]" style={{ color: "#5C5A55" }}>
                Wow! you&apos;ve delved deep into the wizarding world&apos;s secrets. Have
                Harry&apos;s parents died yet? Oops, looks like you&apos;re not there yet. Get
                reading now!
            </p>
            <button
                type="button"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-b px-7 py-3.5 text-[15px] font-medium text-neutral-200 transition active:translate-y-px"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(40, 50, 56, 0.85), rgba(20, 30, 36, 0.85))",
                    backgroundColor: "#1E2A2F",
                    boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 2px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.5)",
                }}
            >
                Start reading
                <ArrowUpRightIcon className="h-4 w-4" />
            </button>
        </div>
    );
}
