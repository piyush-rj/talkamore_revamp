import Image from "next/image";
import { featuredBook } from "./data";

export default function OpenBookImage() {
    return (
        <div
            className="pointer-events-none absolute left-[60%] top-20 z-20 hidden -translate-x-1/2 md:block"
            style={{
                filter: "drop-shadow(0 30px 40px rgba(40, 30, 15, 0.18))",
            }}
        >
            <Image
                src={featuredBook.image}
                alt="Open book"
                width={520}
                height={350}
                unoptimized
                priority
                className="h-auto w-[460px] max-w-none object-contain lg:w-[520px]"
            />
        </div>
    );
}
