// Edit this file to update the portfolio's copy, projects, skills, and links.
export const portfolio = {
  name: "Ryan Thai",
  initials: "rt",
  role: "Computer science student & aspiring software engineer",
  availability: "Open to software engineering internships",
  headline: ["Thoughtful code.", "Useful things."],
  introduction:
    "I'm Ryan, a computer science student at Sacramento State. I build for the web, enjoy connecting the pieces behind it, and care about making technology work for more people.",
  location: "Sacramento, California",
  email: "rthai828@gmail.com",
  links: {
    github: "https://github.com/buriburi11",
    linkedin: "https://www.linkedin.com/in/ryan-thai-858119297/",
    resume: "/Ryan_Thai_Resume.pdf",
  },
  navigation: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      number: "01",
      name: "CarSearch",
      category: "Full-stack web application",
      ownership: "Individual project",
      status: "Live project",
      description:
        "A better way to find your next car. Search real dealer listings by make, model, or VIN, refine the details, and keep your favorites in one place.",
      details: [
        { title: "Find the right fit", text: "Vehicle search, location filters, and listing counts that help narrow the search." },
        { title: "Remember the details", text: "Saved cars and price history backed by Supabase, with no account required." },
        { title: "Make every call count", text: "Server-side API integration and shared caching designed around a limited API quota." },
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "REST APIs"],
      demo: "https://car-search-website-tan.vercel.app",
      repository: null,
      visual: { title: "CarSearch", subtitle: "Less searching. More finding.", note: "Search · Discover · Save" },
    },
    {
      number: "02",
      name: "INSTEA",
      category: "Ordering & loyalty platform",
      ownership: "Team of 6",
      status: "In progress · Team senior project",
      description:
        "Planning and prototyping a web and mobile ordering experience for a tea business, together with a six-person senior project team.",
      details: [
        { title: "Current stage", text: "Requirements, architecture planning, and early prototypes." },
        { title: "Planned capabilities", text: "Ordering, pickup scheduling, Square payments, loyalty rewards, and an administrative dashboard." },
      ],
      technologies: ["React", "React Native", "Spring Boot", "PostgreSQL"],
      demo: null,
      repository: null,
      visual: { title: "INSTEA", subtitle: "A little loyalty. A lot of possibility.", note: "Concept & prototyping" },
    },
    {
      number: "03",
      name: "Zero Waste Game",
      category: "Accessibility & responsive web",
      ownership: "Team of 6 · CS131",
      status: "October 2025",
      description:
        "Collaborated with five teammates to modernize an existing educational website, improve accessibility, and make the experience work across devices.",
      details: [
        { title: "Inclusive by design", text: "Refactored the website with WCAG 2.1 accessibility guidelines and responsive layouts in mind." },
        { title: "Built together", text: "Used GitHub branches and pull requests to coordinate changes and review work." },
      ],
      technologies: ["Accessibility", "Responsive design", "Git", "GitHub"],
      demo: null,
      repository: null,
      visual: { title: "Less waste.\nMore access.", subtitle: "Small changes, a more inclusive web.", note: "Zero Waste Game" },
    },
  ],
  about: {
    heading: "Curious about the how.\nMindful of the who.",
    paragraphs: [
      "I like working across the stack: shaping an interface, connecting an API, and figuring out how the data should fit together. CarSearch gave me a place to bring those pieces into one working application.",
      "My accessibility work at Sacramento State also shapes how I approach software. A useful product should be understandable, responsive, and usable by the people who need it.",
    ],
    community: "As a MESA member since 2023, I take part in STEM workshops, mentorship, and collaborative projects.",
  },
  education: {
    school: "California State University, Sacramento",
    degree: "B.S. in Computer Science",
    graduation: "Expected May 2027",
    gpa: "3.8 / 4.0",
    distinction: "Dean's List",
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "HTML & CSS", "SQL", "C", "Assembly", "Bash"] },
    { category: "Frameworks & data", items: ["Next.js", "React", "React Native", "Spring Boot", "REST APIs", "PostgreSQL", "Supabase"] },
    { category: "Tools & platforms", items: ["Git & GitHub", "Docker", "Vercel", "Render", "Linux", "Windows", "macOS"] },
  ],
  experience: {
    period: "Aug 2026 — Present",
    title: "IRT Instructional Materials Student Intern",
    organization: "Sacramento State · Information Resources & Technology",
    description: "Helping make instructional materials more accessible to students with disabilities.",
    highlights: [
      "Remediate PDFs, Word documents, presentations, and Canvas content using WCAG 2.1-aligned guidance.",
      "Identify and verify accessibility improvements with Acrobat Pro, CommonLook PDF, UDOIT, and built-in accessibility checkers.",
      "Track requests through ServiceNow and Microsoft Teams, coordinate with faculty and staff, and assist with captioning requests.",
    ],
  },
  contact: {
    heading: "Let's build something\nworth using.",
    message: "Have an internship opportunity or a project in mind? I'd love to hear about it.",
  },
};
