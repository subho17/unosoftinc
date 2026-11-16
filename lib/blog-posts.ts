export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
}

export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  views: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  imageSrc: string;
  imageAlt: string;
  sections: ArticleSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "breaking-into-product-design",
    tag: "Interview",
    title:
      "Breaking Into Product Design: Advice from Untitled Founder, Frankie",
    excerpt:
      "Let's get one thing out of the way: you don't need a fancy Bachelor's Degree to get into Product Design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can get into this growing industry.",
    date: "16 Jan 2024",
    isoDate: "2024-01-16",
    views: "26k Views",
    readTime: "8 min read",
    author: {
      name: "Frankie Sullivan",
      role: "Founder & Design Director",
    },
    imageSrc: "/blog-hero.jpg",
    imageAlt: "Frankie Sullivan, founder and design director, in conversation",
    sections: [
      {
        paragraphs: [
          "There is a persistent myth in this industry that product design is a closed club — that you need a design degree, a portfolio built at a well-known agency, and a referral to get your first role. Frankie Sullivan has spent the last decade proving the opposite.",
          "\"Every strong designer I have hired learned the craft by solving real problems for real people,\" she says. \"The degree is a shortcut to vocabulary. It is not the work.\"",
        ],
      },
      {
        heading: "Portfolios beat credentials",
        paragraphs: [
          "When Frankie reviews candidates, she spends under three minutes on the CV and the rest of the time on two or three case studies. What she looks for is not visual polish, but whether the designer can explain a decision and the trade-offs behind it.",
        ],
        bullets: [
          "Show the constraint: budget, timeline, technical debt, or a difficult stakeholder.",
          "Show the rejected option, and why it lost.",
          "Show what happened after launch — even if the answer is 'it did not work'.",
        ],
      },
      {
        heading: "Start where you already are",
        paragraphs: [
          "The fastest route into the field is not a bootcamp. It is finding a product that frustrates you at work or in your own life, and redesigning one flow end-to-end. That single project, documented honestly, is usually enough to get a first conversation.",
        ],
        quote:
          "\"You do not need permission to solve a problem. You need a problem worth solving, and the discipline to show your work.\"",
      },
    ],
  },
  {
    slug: "migrating-to-linear-101",
    tag: "Engineering",
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    date: "19 Jan 2024",
    isoDate: "2024-01-19",
    views: "18k Views",
    readTime: "6 min read",
    author: {
      name: "Jonathan Wills",
      role: "Engineering Lead",
    },
    imageSrc: "/blog-4.jpg",
    imageAlt: "Developer workspace with Linear sprint board on screen",
    sections: [
      {
        paragraphs: [
          "Project management tools tend to suffer from feature creep until nobody wants to open them. Linear took the opposite approach: make issue tracking as fast as a keyboard shortcut, and teams will actually keep it updated.",
          "Migrating from legacy Jira or Asana installations requires unlearning complex multi-step workflows in favor of lightweight cycles and triage queues.",
        ],
      },
      {
        heading: "The three rules of a clean migration",
        bullets: [
          "Do not import stale issues older than 90 days. Archive them in place.",
          "Map complex custom fields to simple tags, cycles, and projects.",
          "Train the engineering team on keyboard navigation from day one.",
        ],
      },
      {
        heading: "Why speed matters in issue tracking",
        paragraphs: [
          "When submitting an issue takes three minutes of dropdown selections, engineers defer logging bugs until Friday. When it takes two seconds with Command+K, bugs get logged in real time. That velocity difference compounds across every sprint.",
        ],
      },
    ],
  },
  {
    slug: "building-your-api-stack",
    tag: "Architecture",
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    date: "18 Jan 2024",
    isoDate: "2024-01-18",
    views: "21k Views",
    readTime: "7 min read",
    author: {
      name: "Lana Steiner",
      role: "Solutions Architect",
    },
    imageSrc: "/about-intro-main.jpg",
    imageAlt: "Software engineers discussing API integration diagrams",
    sections: [
      {
        paragraphs: [
          "Modern application architectures are defined by the contracts between services. A resilient API stack balances developer ergonomics, strict type safety, and real-time observability.",
          "Whether choosing REST, GraphQL, or gRPC, the tooling surrounding schema validation and automated testing dictates your deployment confidence.",
        ],
      },
      {
        heading: "Core layers of a production-grade stack",
        bullets: [
          "Contract-first OpenAPI/TypeScript code generation.",
          "Distributed rate limiting and edge caching policies.",
          "End-to-end tracing with OpenTelemetry and structured logging.",
        ],
      },
    ],
  },
  {
    slug: "bill-walsh-leadership-lessons",
    tag: "Leadership",
    title: "Bill Walsh leadership lessons",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    date: "18 Jan 2024",
    isoDate: "2024-01-18",
    views: "15k Views",
    readTime: "9 min read",
    author: {
      name: "Eve Wilkins",
      role: "VP of People & Culture",
    },
    imageSrc: "/about-hero.jpg",
    imageAlt: "Executive team planning strategic operational roadmap",
    sections: [
      {
        paragraphs: [
          "Bill Walsh did not start by focusing on winning the Super Bowl. He started by dictating how the locker room was kept, how receptionists answered the phone, and how players practiced with game-day precision.",
          "He called it the Standard of Performance. In tech companies, excellence is similarly built on daily engineering hygiene, code review rigor, and transparent communication.",
        ],
      },
      {
        heading: "Focus on the standard, the score takes care of itself",
        quote:
          "\"When the standard of performance is high across every department, winning is merely the natural byproduct of your culture.\"",
      },
    ],
  },
  {
    slug: "pm-mental-models",
    tag: "Product",
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    date: "18 Jan 2024",
    isoDate: "2024-01-18",
    views: "19k Views",
    readTime: "5 min read",
    author: {
      name: "Eve Wilkins",
      role: "Principal Product Manager",
    },
    imageSrc: "/blog-2.jpg",
    imageAlt: "Product manager mapping customer journey maps on digital tablet",
    sections: [
      {
        paragraphs: [
          "The greatest challenge in product management is prioritizing under uncertainty. Without clear mental models, teams default to the loudest customer or the highest-paid opinion.",
          "Using frameworks like First Principles Thinking, Second-Order Consequences, and Regret Minimization brings clarity to high-stakes roadmap decisions.",
        ],
      },
      {
        heading: "Five models every PM should master",
        bullets: [
          "Inversion: Think about how the product could catastrophically fail, then work backwards.",
          "Opportunity Cost: Every feature you build is five other features you chose to kill.",
          "Pareto Principle: 80% of customer value flows from 20% of your platform's capabilities.",
        ],
      },
    ],
  },
  {
    slug: "what-is-wireframing",
    tag: "Design",
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    date: "18 Jan 2024",
    isoDate: "2024-01-18",
    views: "14k Views",
    readTime: "6 min read",
    author: {
      name: "Lana Steiner",
      role: "Design Lead",
    },
    imageSrc: "/about-intro-video.jpg",
    imageAlt: "Product designer drafting wireframe layouts and user paths",
    sections: [
      {
        paragraphs: [
          "Wireframing is the skeleton of user experience. Jumping straight into high-fidelity Figma components distracts teams with typography and colors before the information architecture has been validated.",
          "Low-fidelity wireframes keep conversations focused on user intent, page hierarchy, and interaction flow.",
        ],
      },
      {
        heading: "When to use low vs high fidelity",
        bullets: [
          "Low-fidelity for early discovery, client stakeholder alignment, and paper prototypes.",
          "Mid-fidelity for component layout grids and developer handoff staging.",
          "High-fidelity for final design system testing and user validation labs.",
        ],
      },
    ],
  },
  {
    slug: "how-collaboration-makes-us-better-designers",
    tag: "Collaboration",
    title: "How collaboration makes us better designers",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    date: "19 Jan 2024",
    isoDate: "2024-01-19",
    views: "22k Views",
    readTime: "7 min read",
    author: {
      name: "Jonathan Wills",
      role: "Design Director",
    },
    imageSrc: "/blog-3.jpg",
    imageAlt: "Cross-functional team collaborating around digital design boards",
    sections: [
      {
        paragraphs: [
          "Design done in isolation is art; design done collaboratively is product. When designers pair with engineers, customer support, and sales leads early, blind spots disappear.",
          "Shared Figma jam sessions and early design critiques create collective ownership and produce products that survive real-world usage.",
        ],
      },
    ],
  },
  {
    slug: "our-top-10-javascript-frameworks",
    tag: "Frontend",
    title: "Our top 10 Javascript frameworks to use",
    excerpt:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    date: "18 Jan 2024",
    isoDate: "2024-01-18",
    views: "31k Views",
    readTime: "8 min read",
    author: {
      name: "Lana Steiner",
      role: "Senior Frontend Engineer",
    },
    imageSrc: "/services-hero.jpg",
    imageAlt: "Modern web development workspace with high-performance code on screens",
    sections: [
      {
        paragraphs: [
          "The modern frontend ecosystem moves at breakneck speed. From full-stack meta-frameworks like Next.js and Remix to ultra-fast view libraries like Svelte, Vue, and Solid, choosing the right tool depends on your team's rendering requirements.",
          "Here is how we evaluate frameworks for performance, bundle size, and long-term maintainability.",
        ],
      },
      {
        heading: "Top picks for 2024",
        bullets: [
          "Next.js: The gold standard for React enterprise SSR and React Server Components.",
          "SvelteKit: Unmatched developer ergonomics with zero virtual-DOM overhead.",
          "Remix: The purist web standards framework with nested routing and optimistic UI.",
          "Astro: Unrivalled content performance with islands architecture.",
        ],
      },
    ],
  },
  {
    slug: "podcast-creating-a-better-cx-community",
    tag: "Community",
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    date: "19 Jan 2024",
    isoDate: "2024-01-19",
    views: "12k Views",
    readTime: "11 min listen",
    author: {
      name: "Jonathan Wills",
      role: "Community Host & Strategist",
    },
    imageSrc: "/founder.jpg",
    imageAlt: "Podcast studio interview setup with microphones and recording consoles",
    sections: [
      {
        paragraphs: [
          "In episode 42 of the UnoSoft Journal podcast, we dive into how customer experience leaders build enduring user communities.",
          "From community-led growth strategies to moderation best practices, discover how building genuine peer-to-peer connection turns customers into passionate brand advocates.",
        ],
      },
    ],
  },
  {
    slug: "engineering-culture-and-distributed-teams",
    tag: "Culture",
    title: "Engineering culture & distributed teams",
    excerpt:
      "How high-performing global engineering teams maintain velocity, trust, and alignment without endless meetings.",
    date: "18 Jan 2024",
    isoDate: "2024-01-18",
    views: "17k Views",
    readTime: "7 min read",
    author: {
      name: "Eve Wilkins",
      role: "VP of People & Culture",
    },
    imageSrc: "/blog-5.jpg",
    imageAlt: "Distributed remote engineering team conducting async sprint planning",
    sections: [
      {
        paragraphs: [
          "Remote work does not fail because of time zones; it fails because teams try to replicate an office environment over Zoom.",
          "High-performing distributed teams treat async communication as their primary interface. Writing detailed RFCs, setting explicit SLAs on code reviews, and documenting decisions replace the tap on the shoulder.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}
