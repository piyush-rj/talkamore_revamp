import { JSX } from "react";
import FeaturedBookRight from "./landing/FeaturedBookRight";
import OpenBookImage from "./landing/OpenBookImage";
import PopularNow from "./landing/PopularNow";
import NewSeriesCollection from "./landing/NewSeriesCollection";
import ScheduleReading from "./landing/ScheduleReading";
import ReaderFriends from "./landing/ReaderFriends";
import HeroLeft from "./landing/HeroLeft";

export default function LandingBookSplitSection(): JSX.Element {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden"
            style={{ backgroundColor: "#EFE6D2" }}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 hidden md:block"
                style={{ backgroundColor: "#F4EDDC", width: "40%" }}
            />

            <OpenBookImage />

            <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col">
                <div className="grid grid-cols-1 gap-12 px-8 pb-16 pt-12 md:grid-cols-[3fr_2fr] md:gap-16 md:px-12 md:pt-20 lg:px-16">
                    <div className="flex flex-col gap-16">
                        <HeroLeft />
                        <PopularNow />
                        <NewSeriesCollection />
                    </div>

                    <div className="flex flex-col gap-16 md:pl-8 lg:pl-16">
                        <div className="md:pt-[300px] lg:pt-[400px]">
                            <FeaturedBookRight />
                        </div>
                        <ScheduleReading />
                        <ReaderFriends />
                    </div>
                </div>
            </div>
        </section>
    );
}
