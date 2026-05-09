export type Persona = {
    name: string;
    tagline: string;
    bullets: string[];
    quote: string;
    tags: string[];
    orbHighlight: string;
    orbMid: string;
    orbDeep: string;
};

export const personas: Persona[] = [
    {
        name: "maya",
        tagline: "the one who pays attention",
        bullets: [
            "the one who notices what you didn't say.",
            "names the gap between word and action, warmly.",
            "remembers what you mentioned in passing last tuesday.",
        ],
        quote: "you've been busy in a way that keeps you out of that call. it's still there.",
        tags: ["warm", "observational", "the default"],
        orbHighlight: "#F4D2E5",
        orbMid: "#D6A0C2",
        orbDeep: "#9C5F84",
    },
    {
        name: "sage",
        tagline: "the one who slows you down",
        bullets: [
            "patient. takes a beat before answering.",
            "asks what's underneath the surface.",
            "leaves silence when silence is the right answer.",
        ],
        quote: "you said that fast. what's underneath it.",
        tags: ["deliberate", "patient", "for the depth days"],
        orbHighlight: "#E0EEDF",
        orbMid: "#A6C7B0",
        orbDeep: "#5E8A6F",
    },
    {
        name: "theo",
        tagline: "the one who names the shape",
        bullets: [
            "names the architecture, not just the feeling.",
            "dry, structural. gives you back a clearer picture.",
            "finds the thing that's actually loud underneath.",
        ],
        quote: "the part that's still loud is what your brother said in the kitchen.",
        tags: ["steady", "structural", "for the days you need a clearer picture"],
        orbHighlight: "#C8A47A",
        orbMid: "#5C3F26",
        orbDeep: "#1F1108",
    },
    {
        name: "luna",
        tagline: "the one who says it",
        bullets: [
            'no cushion. no "have you considered".',
            "roasts the excuse, not the person.",
            "stays after she says the hard thing.",
        ],
        quote: "three paragraphs to say \"i'm scared.\" you're scared. that's the whole thing.",
        tags: ["blunt", "funny", "for the days you already know the answer"],
        orbHighlight: "#F36CB0",
        orbMid: "#B6307A",
        orbDeep: "#5C1640",
    },
];

export type ScheduleDay = {
    label: string;
    date: number;
    selected?: boolean;
    accent?: boolean;
};

export const scheduleDays: ScheduleDay[] = [
    { label: "Sun", date: 11, accent: true },
    { label: "Mon", date: 12 },
    { label: "Tue", date: 13, selected: true },
    { label: "Wed", date: 14 },
    { label: "Thu", date: 15 },
    { label: "Fri", date: 16 },
    { label: "Sat", date: 17 },
];

export type FriendComment = {
    name: string;
    avatar: string;
    comment: string;
    chapter: string;
    timeAgo: string;
};

export const friendComments: FriendComment[] = [
    {
        name: "Roberto Jordan",
        avatar: "https://i.pravatar.cc/96?img=12",
        comment:
            "What a delightful and magical chapter it is! It indeed transports readers to the wizarding world..",
        chapter: "Chapter Five: Diagon Alley",
        timeAgo: "2 min ago",
    },
    {
        name: "Anna Henry",
        avatar: "https://i.pravatar.cc/96?img=45",
        comment: "I finished reading the chapter last night and",
        chapter: "Chapter Four: The Keeper of the Keys",
        timeAgo: "12 min ago",
    },
];

export const featuredBook = {
    title: "The Cambers of Secrets",
    pagesRead: 154,
    pagesTotal: 300,
    description:
        "Harry as he returns to Hogwarts school of witchcraft and wizardry for his 2nd year, only to discover that..",
    author: "JK Rowlings",
    image: "/images/book.png",
};

export const newSeries = {
    title: "A Legend of Ice and Fire: The Ice Horse",
    meta: "8 chapters each vol",
    volumes: "2 vol",
    covers: [
        "https://covers.openlibrary.org/b/isbn/9780553103540-L.jpg",
        "https://covers.openlibrary.org/b/isbn/9781338132311-L.jpg",
    ],
};

export const currentUser = {
    firstName: "Harvey",
    fullName: "Alexander Mark",
    avatar: "https://i.pravatar.cc/96?img=33",
};
