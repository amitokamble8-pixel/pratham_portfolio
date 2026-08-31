/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Pratham",
  last: "Jalan",
  fullName: "Pratham Jalan",
  tagline: "Economics. Global Affairs. Real-World Problem Solving.",
  location: "Mumbai, India",
  email: "",
  phone: "",
  bio: [
    "I'm a student at Dhirubhai Ambani International School in Mumbai, Class of 2027, currently pursuing the IB Diploma Programme. I'm interested in understanding how economic decisions, political institutions, and real-world constraints shape the choices people and organizations make.",
    "My academic focus is Economics and Global Politics, supported by Mathematics and Computer Science. I've explored these interests through financial research, a supply-chain field study, Model United Nations, debate, and an interdisciplinary Extended Essay.",
    "Outside academics, I pursue Hindustani classical vocal music and contribute to my school community through leadership and collaborative activities.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder-cv.pdf",
  photo: "/placeholder-profile.png",
  aboutPhoto: "/placeholder-profile.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research & Experience", to: "/work" },
      { label: "Projects", to: "/projects" },
      { label: "Academic Interests", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },

  { label: "Activities", to: "/sports" },
];

/* ---- Research & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "ionic-wealth-financial-research",
    role: "Financial Research Intern",
    org: "Ionic Wealth by Angel One",
    logo: "",
    location: "Mumbai, India",
    dates: "",
    meta: "Financial Research Internship · Mumbai, India ·",
    badge: "Research",
    desc: "Conducted targeted research into the Quick Service Restaurant (QSR) sector, studying major market players and their business models.",
    bullets: [
      "Researched the Quick Service Restaurant (QSR) sector, studying major market players and their business models",
      "Analyzed annual reports, financial ratios, and the factors influencing company valuations",
      "Applied economic and financial concepts to real companies to understand how businesses respond to market conditions",
    ],
    tags: ["Finance", "Equity Research", "Economics"],
    featured: true,
  },
  {
    slug: "logistics-supply-chain-field-study",
    role: "Field Researcher",
    org: "Logistics & Supply Chain Field Study",
    logo: "",
    location: "Vadodara, India",
    dates: "",
    meta: "Field Study · Vadodara, India ·",
    badge: "Field Study",
    desc: "Conducted an on-site study of tyre warehouses in Vadodara to understand how supply-chain operations work in practice.",
    bullets: [
      "Carried out an on-site study of tyre warehouses to observe supply-chain operations in a working environment",
      "Examined operational bottlenecks and how companies address limited storage space and labour availability",
      "Moved from studying supply chains conceptually to observing how operational decisions are actually made",
    ],
    tags: ["Supply Chain", "Operations", "Field Research"],
    featured: true,
  },
  {
    slug: "extended-essay",
    role: "Independent Researcher",
    org: "IB Extended Essay — Economics × Global Politics",
    logo: "",
    location: "Mumbai, India",
    dates: "In Progress",
    meta: "In Progress · Interdisciplinary Economics & Global Politics ·",
    badge: "Research",
    desc: "An interdisciplinary Economics Extended Essay supported by Global Politics, examining an economic question through a broader political and institutional lens.",
    bullets: [
      "Writing an interdisciplinary Economics Extended Essay supported by Global Politics",
      "Bringing together two core academic interests to examine an economic question through a political and institutional lens",
      "Developing skills in independent research, argumentation, evaluation, and evidence-based analysis",
    ],
    tags: ["Economics", "Global Politics", "Independent Research"],
    featured: true,
  },
  {
    slug: "economics-summit",
    role: "Debate Participant — 2nd Prize",
    org: "School Economics Summit",
    logo: "",
    location: "Mumbai, India",
    dates: "",
    meta: "2nd Prize · Debate · Mumbai, India ·",
    badge: "Award",
    desc: "Participated in the school Economics Summit and earned 2nd prize in the debate.",
    bullets: [
      "Earned 2nd prize in the debate at the school Economics Summit",
      "Researched economic issues and constructed structured, evidence-based arguments",
      "Evaluated competing perspectives and responded to opposing viewpoints under time pressure",
    ],
    tags: ["Economics", "Debate", "Argumentation"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "QSR Sector Financial Research",
    org: "Ionic Wealth by Angel One",
    meta: "Financial Research Internship",
    desc: "Targeted research into the Quick Service Restaurant sector, studying major market players and their business models through annual reports, financial ratios, and the factors influencing company valuations.",
    tags: ["Finance", "Equity Research", "Valuation"],
    featured: true,
  },
  {
    name: "Tyre Warehouse Supply-Chain Field Study",
    org: "Vadodara",
    meta: "On-Site Study",
    desc: "An on-site study of tyre warehouses examining operational bottlenecks and how companies respond to constraints on storage space and labour availability — moving supply-chain study from theory to observed practice.",
    tags: ["Supply Chain", "Operations", "Field Research"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "Grade 10 Board Examination — 98.20%",
    meta: "Academic Highlight",
    detail: "Achieved 98.20% in the Grade 10 Board examinations.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "Economics Summit — 2nd Prize, Debate",
    meta: "School Economics Summit",
    detail: "Second prize in the Economics Summit debate, researching economic issues, constructing arguments, and responding to opposing viewpoints.",
    link: "",
    featured: true,
  },
  {
    icon: "📊",
    title: "Current CGPA — 3.85",
    meta: "As of March 2026",
    detail: "IB Diploma Programme with Economics, Global Politics, and Mathematics: Analysis & Approaches at Higher Level.",
    link: "",
    featured: true,
  },
  {
    icon: "🎵",
    title: "Madhyama Pratham — Hindustani Classical Vocal",
    meta: "Akhil Bharatiya Gandharv Mahavidyalaya",
    detail: "Successfully completed and passed the Madhyama Pratham examination in Hindustani Classical Vocals, with training continuing toward the next-level examination in November 2026.",
    link: "",
    featured: true,
  },
  {
    icon: "🌐",
    title: "8+ Model United Nations Conferences",
    meta: "Student Leader · Grades 9–10",
    detail: "Participated in 8+ MUN conferences and served as a leader in the co-curricular activity, mentoring younger students in research, public speaking, and debate.",
    link: "",
    featured: true,
  },
  {
    icon: "🏥",
    title: "Community Health Camp — 500 People Served",
    meta: "Panna",
    detail: "Contributed to organizing a community health camp that served approximately 500 people.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */

export const ARTICLES = [
  {
    title: "Economics & Markets",
    outlet: "How individuals and firms respond to incentives, constraints, and changing market conditions",
    link: "",
  },
  {
    title: "Politics & Institutions",
    outlet: "How institutions and political decisions influence economic and social outcomes",
    link: "",
  },
  {
    title: "Business & Finance",
    outlet: "How financial information can be used to understand how companies perform and make decisions",
    link: "",
  },
  {
    title: "Real-World Systems",
    outlet: "How organizations adapt when resources such as labour, space, and capital are limited",
    link: "",
  },
];

/* ---- Service, leadership & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "500", label: "People Served — Health Camp" },
    { value: "8+", label: "MUN Conferences" },
    { value: "2", label: "Student Leadership Roles" },
  ],
  orgs: [
    {
      name: "Community Health Initiative",
      role: "Contributor · Panna",
      desc: "Contributed to organizing a community health camp in Panna that served approximately 500 people. The experience gave me an opportunity to work directly with a community and contribute to an initiative addressing practical needs on the ground.",
    },
    {
      name: "Model United Nations",
      role: "Student Leader · Grades 9–10",
      desc: "Served as a leader in the MUN co-curricular activity, helping younger students with geopolitical research, public speaking, debate, and MUN protocols. Participating in 8+ conferences has allowed me to research international issues, represent different perspectives, construct arguments, and engage in structured debate.",
    },
    {
      name: "Music Club",
      role: "Student Leader · Grade 11",
      desc: "Served as a leader in the school Music Club, helping organize activities and supervising younger students. The role allowed me to contribute to the school's creative community while working with students across different age groups.",
    },
  ],
};

/* ---- Athletics, activities & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🎤",
    name: "Hindustani Classical Vocal",
    desc: "Completed and passed the Madhyama Pratham examination in Hindustani Classical Vocals, certified by the Akhil Bharatiya Gandharv Mahavidyalaya. Training continues in preparation for the next-level vocal examination in November 2026.",
  },
  {
    icon: "🌐",
    name: "Model United Nations",
    desc: "Participated in 8+ conferences and served as a student leader in Grades 9–10, researching international issues, representing different perspectives, and engaging in structured debate.",
  },
];

/* ---- Skills ---- */
/* NOTE: the source PDF does not list a skills section. The entries below are
   inferred from the described coursework, projects, and activities — review and
   edit before publishing. */

export const SKILLS = [
  {
    group: "Economics & Finance",
    items: ["Financial Statement Analysis", "Financial Ratios", "Valuation Concepts", "Market & Sector Research"],
  },
  {
    group: "Research & Analysis",
    items: ["Independent Research", "Field Research", "Evidence-Based Argumentation", "Evaluation & Critical Analysis"],
  },
  {
    group: "Communication",
    items: ["Debate", "Public Speaking", "Academic Writing", "Mentoring & Team Leadership"],
  },
  {
    group: "Technical",
    items: ["Computer Science", "Mathematics: Analysis & Approaches"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Dhirubhai Ambani International School",
    location: "Mumbai, India",
    level: "International Baccalaureate Diploma Programme · Class of 2027",
    dates: "Grade 8 – Present",
    gpa: "3.85 (as of March 2026) · Grade 10 Boards: 98.20%",
    coursework: [
      "Economics — Higher Level (7)",
      "Global Politics — Higher Level (7)",
      "Mathematics: Analysis & Approaches — Higher Level (6)",
      "Hindi B — Standard Level (7)",
      "Computer Science — Standard Level (7)",
      "English A: Language & Literature — Standard Level (6)",
    ],
  },
  {
    school: "HFS Powai",
    location: "Mumbai, India",
    level: "Prior Schooling (until Grade 7)",
    dates: "",
    gpa: "",
    coursework: [],
  },
];

/* ---- Test scores (none listed in the source document) ---- */
/* NOTE: the PDF lists IB subject grades and board results rather than
   standardised test scores — those are captured under EDUCATION and AWARDS. */

export const TEST_SCORES = [];

/* ---- Looking ahead (additional export — needs a component if you want to render it) ---- */
/* NOTE: the source PDF has no explicit "looking ahead" section. The lines below
   are adapted from the stated academic interests — review before publishing. */

export const LOOKING_AHEAD = [
  "I want to keep exploring where economics and politics overlap — how policy decisions carry economic consequences, and how institutions and regulation shape the choices organizations make.",
  "At university, I hope to study these questions rigorously, combining economic theory, quantitative analysis, and real-world research into how systems and institutions actually behave.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research & Experience", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Academic Interests", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
