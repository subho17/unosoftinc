interface ExperienceItem {
    company: string;
    period: string;
    role: string;
    description: string;
    accent: "blue" | "dark";
}

const experiences: ExperienceItem[] = [
    {
        company: "Self-Employed, NYC",
        period: "Sep 2023 – July 2023",
        role: "Visual Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        accent: "blue",
    },
    {
        company: "Insightrancer",
        period: "Aug 2018 – Sep 2023",
        role: "UI/UX Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        accent: "dark",
    },
    {
        company: "KG Design Studio",
        period: "Sep 2013 – Aug 2018",
        role: "Web Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        accent: "blue",
    },
    {
        company: "KG Design Studio",
        period: "Sep 2013 – Aug 2018",
        role: "Web Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        accent: "blue",
    },
];

export default function Experincepage() {
    return (
        <section className="sticky top-0 z-20 w-full min-h-screen bg-[#fafafa] py-20 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1324] tracking-tight">
                        My Work Experience
                    </h2>
                    <div className="w-28 h-1 bg-[#0083d1] mx-auto mt-4 rounded-full" />
                </div>

                {/* Timeline */}
                <div className="flex flex-col">
                    {experiences.map((item, index) => {
                        const isFirst = index === 0;
                        const isLast = index === experiences.length - 1;

                        return (
                            <div
                                key={`${item.company}-${item.period}-${index}`}
                                className={`grid grid-cols-[44px_1fr] md:grid-cols-[1fr_100px_1fr] items-start ${isLast ? "" : "pb-12 md:pb-14"
                                    }`}
                            >
                                {/* Left column (Company & Period on desktop) */}
                                <div className="hidden md:block pr-4">
                                    <h3 className="text-2xl font-bold text-[#0b1324] tracking-tight">
                                        {item.company}
                                    </h3>
                                    <p className="mt-1.5 text-sm font-medium text-[#475569]">
                                        {item.period}
                                    </p>
                                </div>

                                {/* Center timeline node & line */}
                                <div className="relative flex justify-center h-full">
                                    {!isFirst && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-0 h-6 w-[2.5px] bg-[#cbd5e1]"
                                        />
                                    )}
                                    {!isLast && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-6 bottom-0 w-[2.5px] bg-[#cbd5e1]"
                                        />
                                    )}

                                    {/* Outer halo + white border + colored core */}
                                    <div
                                        className={`relative z-10 mt-1 w-10 h-10 rounded-full flex items-center justify-center ${item.accent === "blue"
                                            ? "bg-[#0083d1]/25"
                                            : "bg-[#333b48]/20"
                                            }`}
                                    >
                                        <div
                                            className={`w-6 h-6 rounded-full border-[3px] border-white shadow-xs ${item.accent === "blue"
                                                ? "bg-[#0083d1]"
                                                : "bg-[#2f3640]"
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Right column (Role & Description, plus Company/Period on mobile) */}
                                <div className="pl-4 md:pl-4">
                                    <div className="md:hidden mb-2">
                                        <h3 className="text-xl font-bold text-[#0b1324]">
                                            {item.company}
                                        </h3>
                                        <p className="text-xs font-medium text-[#475569]">
                                            {item.period}
                                        </p>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#0b1324] tracking-tight">
                                        {item.role}
                                    </h3>
                                    <p className="mt-2 text-sm md:text-[15px] text-[#334155] leading-relaxed max-w-md">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

