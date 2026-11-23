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
    "I'm interested in how economics, politics, and real-world constraints shape the choices people and organizations make. I've explored this through financial research and an interdisciplinary Extended Essay, alongside Hindustani classical vocal music and school leadership.",
    "I joined Dhirubhai Ambani International School in Grade 8 after studying at HFS Powai. I scored 98.20% in my Grade 10 Boards and am now pursuing the IB Diploma Programme, with Economics, Global Politics, and Mathematics: Analysis & Approaches at Higher Level.",
    "I enjoy subjects that explain the reasoning behind real-world decisions: Economics for incentives, markets, and choices, and Global Politics for institutions, power, and competing interests. I'm most interested in where they overlap, such as how policy carries economic consequences and how geography and institutions shape a country's opportunities. I follow these connections through current affairs, research, and discussion.",
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
  cv: "",
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research & Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
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
    slug: "greatwhite-electricals-internship",
    role: "Management Intern",
    org: "GreatWhite Electricals",
    logo: "",
    location: "",
    dates: "",
    meta: "Management Internship ·",
    badge: "Internship",
    desc: "Management internship shadowing different departments to understand how they function in tandem and manage operations and coordination.",
    bullets: [
      "Shadowed departments including supply chain, product development, accounting, HR, and marketing to understand how they work together",
      "Studied how operations and coordination are managed across a manufacturing company",
      "Learned about the business cycle of manufacturing companies and sales techniques that draw on behavioral economics",
    ],
    tags: ["Management", "Operations", "Behavioral Economics"],
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
    slug: "trimbakeshwar-field-research",
    role: "Field Researcher",
    org: "Trimbakeshwar Field Research",
    logo: "",
    location: "Trimbakeshwar, India",
    dates: "In Progress",
    meta: "In Progress · Field Research · Trimbakeshwar, India ·",
    badge: "Field Research",
    desc: "Ongoing field research into adverse selection, studying price premiums among Rudraksh bead sellers in Trimbakeshwar.",
    bullets: [
      "Collecting data on pricing premiums among Rudraksh bead sellers, comparing fixed shops and cart vendors",
      "Testing whether signalling, in the form of certification, reduces information asymmetry and sustains price differences",
      "Further exploring adverse selection through primary data collection",
    ],
    tags: ["Adverse Selection", "Information Asymmetry", "Field Research"],
    featured: true,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Extended Essay — Economics × Global Politics",
    org: "IB Diploma Programme",
    meta: "Global Politics",
    desc: "An interdisciplinary Economics Extended Essay supported by Global Politics. The research question: \"To what extent have India's import-substitution subsidies, particularly FAME-II and PLI-Auto on electric four-wheelers, as instruments of economic sovereignty, contributed to sustainable development between 2019 and 2026?\" Using quantitative modelling alongside a theoretical and conceptual approach, I evaluated the policies across environmental, economic, and social sustainability. My model found major climate and health benefits (excluding costs such as battery disposal), but the economic gain was smaller as job creation fell short of target, and the social impact was weakest as subsidies mainly reached wealthy buyers and large firms. The key lesson: a policy can advance one dimension of sustainability while compromising another, so it needs a holistic evaluation.",
    tags: ["Economics", "Global Politics", "Independent Research"],
    featured: true,
  },
  {
    name: "Mathematical Modelling — Global EV Adoption",
    org: "Mathematics",
    meta: "Modelling Project",
    desc: "Following my EV policy research, I modelled how fast electric vehicles are being adopted globally using logistic differential equations and the Bass diffusion model. I compared the predictive accuracy of the two models against real adoption data, alongside forecasting analysis using calculus, statistics, and other mathematical tools.",
    tags: ["Mathematical Modelling", "Bass Diffusion", "Forecasting"],
    featured: true,
  },
  {
    name: "Mumbai Coastal Road Research Essay",
    org: "Mumbai",
    meta: "Research Essay",
    desc: "An in-depth study of the Mumbai Coastal Road and how infrastructure development in Mumbai affects sustainability, combining primary and secondary research with political frameworks, concepts, and theories for a multidimensional evaluation. For the primary research, I interviewed a former BMC commissioner, an L&T project manager, and an environmental activist, then compiled their different viewpoints into an argumentative essay.",
    tags: ["Infrastructure", "Sustainability", "Primary Research"],
    featured: true,
  },
  {
    name: "World Economics Cup — Policy Proposal",
    org: "World Economics Cup · Continental Round",
    meta: "Individual Silver Award",
    desc: "In light of the negative externalities of social media, I presented a policy proposal in a group presentation at the continental round. I suggested a hypothecated tax scaled to daily time on the platform, with revenue funding mental health and digital literacy programmes so that platforms pay for the harm they cause. I paired it with a chronological default feed, so users must opt in to personalised algorithms, addressing the information asymmetry around how feeds capture attention.",
    tags: ["Economics", "Policy", "Externalities"],
    featured: true,
  },
  {
    name: "Personal Finance & Budgeting Tracker",
    org: "Java Applet",
    meta: "Planned",
    desc: "A planned Java application to track my personal finances and budgeting. The aim is to record income and expenses, group spending into categories, and compare it against a budget, turning what I've studied in economics and finance into a practical tool and building my programming skills along the way.",
    tags: ["Java", "Personal Finance", "Computer Science"],
    featured: false,
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
    icon: "📊",
    title: "Current CGPA — 3.86",
    meta: "As of June 2026",
    detail: "IB Diploma Programme with Economics, Global Politics, and Mathematics: Analysis & Approaches at Higher Level.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "World Economics Cup — Individual Silver Award",
    meta: "Continental Round",
    detail: "Won an individual silver award in the continental round, which included a series of multiple-choice tests and a group presentation with a policy proposal on the negative externalities of social media.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "Cambridge Economics & Finance Competition — Individual Silver Award",
    meta: "Qualifier Round",
    detail: "Won an individual silver award in the qualifier round of the Cambridge economics and finance competition.",
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
    icon: "🏥",
    title: "Community Health Camp — 500 People Served",
    meta: "Panna",
    detail: "Contributed to organizing a community health camp that served approximately 500 people.",
    link: "",
    featured: false,
  },
];

/* ---- Gallery (certificates shown on the homepage) ----
   Put each image in /public/certificates/ and reference it as
   "/certificates/<file-name>". Leave `date` or `issuer` empty to hide them.
   The file names below are placeholders — rename to match your files. */

export const GALLERY = [
  {
    title: "World Economics Cup — Individual Silver Award",
    issuer: "World Economics Cup · Continental Round",
    date: "",
    image: "wec.png",
  },
  {
    title: "Cambridge Economics & Finance Competition — Individual Silver Award",
    issuer: "Qualifier Round",
    date: "",
    image: "ce.png",
  },
];

/* ---- Academic interests ---- */

export const ARTICLES = [
  {
    title: "Economics & Markets",
    outlet: "How individuals and firms respond to incentives, constraints, and changing market conditions.",
    link: "",
  },
  {
    title: "Politics & Institutions",
    outlet: "How institutions and political decisions influence economic and social outcomes.",
    link: "",
  },
  {
    title: "Business & Finance",
    outlet: "How financial information can be used to understand how companies perform and make decisions.",
    link: "",
  },
  {
    title: "Real-World Systems",
    outlet: "How organizations adapt when resources such as labour, space, and capital are limited.",
    link: "",
  },
];

/* ---- Service, leadership & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "500", label: "People Served — Health Camp" },
    { value: "9 Months", label: "Teaching to 5th-6th grade students" },
    { value: "2", label: "Student Leadership Roles" },
  ],
  orgs: [
    {
      name: "Community Health Initiative",
      role: "Contributor · Panna",
      desc: "Contributed to organizing a community health camp in Panna that served approximately 500 people. The experience gave me an opportunity to work directly with a community and contribute to an initiative addressing practical needs on the ground, including distributing medicines, conducting eye tests and blood pressure tests, managing crowd logistics, and outreach for the programme. I also served in a campaign across 3 villages to spread awareness about menstrual health.",
    },
    {
      name: "Aseema Municipal School, Kherwadi",
      role: "Volunteer Teacher · 9 Months",
      desc: "For 9 months, I taught English and math to 5th–6th grade students at a school run by the Aseema charitable trust for underprivileged children. My group taught English sentence framing and vocabulary through creative games such as Hangman and Just a Minute speeches, and taught basic algebra and arithmetic using diagrammatic representations, simple real-life problems, and enactments.",
    },
    {
      name: "Music Club",
      role: "Student Leader · Grade 11",
      desc: "Served as a leader in the school Music Club, helping organize activities and supervising younger students. The role allowed me to contribute to the school's creative community while working with students across different age groups.",
    },
    {
      name: "DaisHacked 2026",
      role: "Organizing Team Member",
      desc: "Part of a group of students organizing DaisHacked 2026, a hackathon scheduled for November.",
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
    items: ["Financial Statement Analysis", "Financial Ratios", "Valuation Concepts", "Market & Sector Research", "Behavioral Economics"],
  },
  {
    group: "Research & Analysis",
    items: ["Independent Research", "Field Research", "Primary & Secondary Research", "Evidence-Based Argumentation", "Evaluation & Critical Analysis"],
  },
  {
    group: "Communication",
    items: ["Debate", "Public Speaking", "Academic Writing", "Teaching", "Mentoring & Team Leadership"],
  },
  {
    group: "Technical",
    items: ["Computer Science", "Mathematics: Analysis & Approaches", "Mathematical Modelling"],
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
    gpa: "3.86 (as of June 2026) · Grade 10 Boards: 98.20%",
    coursework: [
      "Economics — Higher Level (7)",
      "Global Politics — Higher Level (7)",
      "Mathematics: Analysis & Approaches — Higher Level (7)",
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
  { label: "Featured Projects", to: "/projects" },
  { label: "Academic Interests", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
