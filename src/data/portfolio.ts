export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  stack: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  demoUrl?: string;
  repoUrl?: string;
  mockupType: 'pujanam' | 'agriculture' | 'estimator';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: 'Internship';
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  featured?: boolean;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  badgeCode: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    avatarUrl: string;
    role: string;
    subRole: string;
    statusBadge: string;
    availability: string;
    location: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    githubUsername: string;
    githubUrl: string;
    linkedinUsername: string;
    linkedinUrl: string;
    portfolioDomain: string;
    portfolioUrl: string;
    resumeFilename: string;
    resumeConfigured: boolean;
    summary: string;
  };
  heroCodeSnippet: string;
  techStrip: { name: string; category: string }[];
  projects: Project[];
  skillGroups: SkillGroup[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Bhushan Gavhane",
    monogram: "BG",
    avatarUrl: "/bhushan-profile.jpg",
    role: "Full-Stack Developer",
    subRole: "MERN Stack Specialist",
    statusBadge: "COMPUTER ENGINEERING GRADUATE",
    availability: "Available for Full-Time Roles & Projects",
    location: "Pune, Maharashtra, India",
    phone: "+91 9373120370",
    phoneDisplay: "+91 9373120370",
    email: "bhushangavhane06@gmail.com",
    githubUsername: "bhushan0919",
    githubUrl: "https://github.com/bhushan0919",
    linkedinUsername: "bhushan-gavhane",
    linkedinUrl: "https://linkedin.com/in/bhushan-gavhane",
    portfolioDomain: "bhushangavhane.netlify.app",
    portfolioUrl: "https://bhushangavhane.netlify.app",
    resumeFilename: "Bhushan_Gavhane_Resume.pdf",
    resumeConfigured: true,
    summary:
      "Computer Engineering graduate with hands-on full-stack web development experience using JavaScript and the MERN stack. Experience includes responsive web applications, REST APIs, JWT-based authentication, role-based access control, and MongoDB-backed applications.",
  },

  heroCodeSnippet: `// Bhushan Gavhane — Full-Stack Developer Profile
const developer = {
  name: "Bhushan Gavhane",
  degree: "B.E. Computer Engineering (CGPA: 8.56)",
  coreStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  specializations: [
    "RESTful API Architecture",
    "JWT Authentication & RBAC",
    "Responsive Frontend Systems",
    "Database Modeling & Performance"
  ],
  readyToDeploy: true,
  currentStatus: "Engineering clean, scalable web products"
};

export default developer;`,

  techStrip: [
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Runtime" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "REST APIs", category: "Architecture" },
    { name: "JWT Auth", category: "Security" },
    { name: "Git & GitHub", category: "Version Control" },
  ],

  projects: [
    {
      id: "pujanam",
      title: "Pujanam",
      tagline: "Pandit Booking and Puja Services Platform",
      category: "Full-Stack MERN Application",
      isFlagship: true,
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Cloudinary", "JWT Auth"],
      features: [
        "Browse puja rituals & book certified pandits based on language, sampradaya & dates",
        "JWT-based authentication with secure token storage & session handling",
        "Role-based authorization (RBAC) separating Devotee, Pandit, and Admin workflows",
        "REST APIs for managing users, puja services, booking schedules & reviews",
        "Cloudinary integration for media assets & pandit identity verification documents",
        "Responsive, role-specific dashboards with booking status tracking",
        "Complete puja service lifecycle, scheduling, and profile management"
      ],
      overview:
        "Pujanam is an end-to-end puja services and pandit booking platform that digitizes traditional ritual arrangements. It bridges the gap between devotees seeking qualified Vedic pandits and pandits looking to organize their ritual schedule with automated status tracking.",
      problem:
        "Devotees frequently encounter difficulties finding verified pandits for specific rituals, lack upfront pricing transparency, and face chaotic communication during auspicious muhurat periods.",
      solution:
        "Engineered an authenticated MERN architecture with granular role-based permissions, allowing devotees to browse rituals, pandits to manage their availability, and admins to govern service listings and verifications seamlessly.",
      demoUrl: "https://bhushangavhane.netlify.app",
      repoUrl: "https://github.com/bhushan0919/pujanam-platform",
      mockupType: "pujanam",
    },
    {
      id: "agriculture-platform",
      title: "Agriculture Platform",
      tagline: "Direct Farm-to-Consumer & Restaurant Marketplace",
      category: "Full-Stack MERN Marketplace",
      isFlagship: false,
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
      features: [
        "Connects agricultural producers directly with consumers and local restaurants",
        "JWT authentication and three-tier role-based access for Farmers, Buyers, and Admins",
        "Real-time product listings with harvest dates, quantity in stock & unit pricing",
        "Image upload pipelines and comprehensive order status management",
        "High-performance REST APIs backed by MongoDB schema validation",
        "Dynamic order tracking and inventory decrements upon confirmed checkout"
      ],
      overview:
        "A full-stack agricultural supply marketplace designed to eliminate predatory middlemen, allowing regional farmers to list fresh harvests directly for households and culinary businesses with transparent pricing.",
      problem:
        "Traditional agricultural supply chains leave farmers with low profit margins while buyers pay inflated prices for aged produce through multiple intermediaries.",
      solution:
        "Created a direct transaction portal where farmers independently manage inventory, set fair market prices, and fulfill verified orders directly with consumers and restaurants.",
      demoUrl: "https://bhushangavhane.netlify.app",
      repoUrl: "https://github.com/bhushan0919/agriculture-platform",
      mockupType: "agriculture",
    },
    {
      id: "construction-estimator",
      title: "Building Construction Estimator",
      tagline: "Responsive Construction Cost Estimation & Material Calculator",
      category: "Web Application & Estimation Tool",
      isFlagship: false,
      stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      features: [
        "Responsive construction cost calculation interface with instant feedback",
        "Structured estimation forms with built-up area, floor count, and material grade inputs",
        "Cross-browser-compatible responsive layouts optimized for desktop and mobile",
        "Organized UI component hierarchy delivering improved usability for contractors & clients",
        "Modular backend processing for calculation formulas and persistence"
      ],
      overview:
        "A practical estimation tool built for civil contractors, civil engineering students, and property owners to calculate estimated material quantities and budgetary projections prior to construction kickoff.",
      problem:
        "Contractors and homeowners often rely on manual, error-prone spreadsheets for preliminary budget estimations, leading to cost overruns and material planning mistakes.",
      solution:
        "Developed a responsive web application that streamlines input parameters—from plot dimensions to finishing specifications—and generates instant itemized estimates.",
      demoUrl: "https://bhushangavhane.netlify.app",
      repoUrl: "https://github.com/bhushan0919/construction-estimator",
      mockupType: "estimator",
    },
  ],

  skillGroups: [
    {
      category: "Languages",
      description: "Foundational programming languages used for application logic & algorithms",
      skills: [
        { name: "JavaScript", highlight: true },
        { name: "Java", highlight: true },
        { name: "Python", highlight: false },
        { name: "PHP", highlight: false },
      ],
    },
    {
      category: "Frontend",
      description: "Modern tools and libraries for crafting responsive, accessible client interfaces",
      skills: [
        { name: "React.js", highlight: true },
        { name: "HTML5", highlight: false },
        { name: "Tailwind CSS", highlight: true },
        { name: "Bootstrap", highlight: false },
      ],
    },
    {
      category: "Backend",
      description: "Server runtimes, web frameworks, API design, and security implementations",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "JWT Auth", highlight: true },
      ],
    },
    {
      category: "Databases",
      description: "Relational and document-oriented databases for robust persistence",
      skills: [
        { name: "MongoDB", highlight: true },
        { name: "MySQL", highlight: true },
      ],
    },
    {
      category: "Tools & Analytics",
      description: "Version control workflows, data analysis, and business intelligence dashboards",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "Power BI", highlight: false },
        { name: "Tableau", highlight: false },
      ],
    },
    {
      category: "Computer Science",
      description: "Core theoretical pillars underpinning software design and system architecture",
      skills: [
        { name: "Data Structures & Algorithms", highlight: true },
        { name: "Object-Oriented Programming (OOP)", highlight: true },
        { name: "Database Management Systems (DBMS)", highlight: true },
        { name: "Operating Systems", highlight: false },
      ],
    },
  ],

  experience: [
    {
      id: "skills-it-academy",
      role: "Data Science Intern",
      company: "Skills IT Academy",
      type: "Internship",
      period: "Dec 23, 2024 – Feb 7, 2025",
      location: "Pune, India",
      description:
        "Completed hands-on internship focusing on real-world data processing workflows, analytical modeling, and executive dashboard development.",
      highlights: [
        "Data preprocessing, transformation, and exploratory data analysis using Python and scientific libraries",
        "Designed and published interactive analytical dashboards and executive reporting with Power BI and Tableau",
        "Applied core machine learning concepts through structured practical assignments and case studies",
        "Conducted thorough data cleaning, outlier handling, feature extraction, and statistical trend analysis"
      ],
      skills: ["Python", "Power BI", "Tableau", "Data Analysis", "Feature Extraction", "Statistical Analysis"],
    },
    {
      id: "ssit-pvt-ltd",
      role: "Python with Django Intern",
      company: "SSIT Pvt. Ltd.",
      type: "Internship",
      period: "June 4, 2022 – July 14, 2022",
      location: "Maharashtra, India",
      description:
        "Intensive web development training and hands-on project engineering using Python and the Django framework.",
      highlights: [
        "Completed structured training in Python programming paradigms and Django backend architecture",
        "Engineered a full-featured 'Virtual Car Showroom' web application with modular app structure",
        "Implemented user authentication, relational database connectivity, and full CRUD operations",
        "Developed cross-device responsive web pages utilizing HTML, CSS, and vanilla JavaScript"
      ],
      skills: ["Python", "Django", "CRUD Architecture", "HTML/CSS", "JavaScript", "Relational Database"],
    },
  ],

  education: [
    {
      id: "be-comp",
      degree: "B.E. in Computer Engineering",
      institution: "Sinhgad Institute of Technology",
      location: "Pune, Maharashtra",
      period: "Sept 2023 – June 2026",
      grade: "8.56 CGPA",
      gradeType: "CGPA",
      featured: true,
      highlights: [
        "Consistent academic excellence with an aggregate 8.56 CGPA",
        "Deep focus on Data Structures, Algorithms, DBMS, and Web Engineering",
        "Active technical project development across full-stack MERN technologies"
      ],
    },
    {
      id: "diploma-comp",
      degree: "Diploma in Computer Technology",
      institution: "Amrutvahini Polytechnic",
      location: "Sangamner, Maharashtra",
      period: "Sept 2020 – June 2023",
      grade: "82.80%",
      gradeType: "Percentage",
      featured: false,
      highlights: [
        "Built solid foundations in Object-Oriented Programming, C++, Java, and Web Basics",
        "Graduated with Distinction (82.80%)"
      ],
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Mary's Secondary School",
      location: "Sangamner, Maharashtra",
      period: "June 2019 – June 2020",
      grade: "84.00%",
      gradeType: "Percentage",
      featured: false,
      highlights: [
        "Distinction result with 84.00% aggregate",
        "Excellence in Mathematics and Science"
      ],
    },
  ],

  certifications: [
    {
      id: "az-900",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "May 2025",
      credentialUrl: "https://learn.microsoft.com/credentials",
      description:
        "Validation of foundational knowledge of cloud services, Azure architecture, security, privacy, compliance, and cloud pricing models.",
      badgeCode: "AZ-900",
    },
    {
      id: "godrej-data-analytics",
      title: "Data Analytics Program",
      issuer: "Godrej Infotech & Godrej & Boyce CSR (Centum Foundation)",
      date: "December 2024",
      credentialUrl: "",
      description:
        "Industry-focused training in data modeling, statistical data analysis, visualization methodologies, and business reporting tools.",
      badgeCode: "DATA-ANALYTICS",
    },
  ],
};
