import { featuredBook } from "./data";

export default function FeaturedBookRight() {
    return (
        <div className="max-w-sm">
            <h2
                className="text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[44px]"
                style={{ color: "#1B1B1B" }}
            >
                {featuredBook.title.split(" ").slice(0, -1).join(" ")}
                <br />
                {featuredBook.title.split(" ").slice(-1)}
            </h2>
            <p className="mt-5 text-[16px]" style={{ color: "#5C5A55" }}>
                <span className="text-[18px] font-semibold" style={{ color: "#A8453A" }}>
                    {featuredBook.pagesRead}
                </span>{" "}
                / {featuredBook.pagesTotal} pages
            </p>
            <p className="mt-5 text-[15px] leading-[1.6]" style={{ color: "#5C5A55" }}>
                {featuredBook.description}
            </p>
            <p className="mt-6 text-right text-[14px]" style={{ color: "#5C5A55" }}>
                - {featuredBook.author}
            </p>
        </div>
    );
}
