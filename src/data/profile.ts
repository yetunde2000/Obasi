export interface Profile {
  name: string;
  koreanName?: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  image: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    researchGate?: string;
    scholar?: string;
    [key: string]: string | undefined;
  };
  education: {
    degree: string;
    department: string;
    departmentUrl: string;
    institution: string;
    institutionUrl: string;
    year: string;
  }[];
  skills: string[];
  about: string;
  interests: {
    "AI/ML": string[];
    "HCI": string[];
  };
  relatedWebsite: {
    title: string;
    url: string;
  };
  lab: {
    name: string;
    fullName: string;
    url: string;
    advisor: string;
  };
  cvUrl: string;
}

export const profileData: Profile = {
  name: "Obasi Oluwatoyosi Yetunde",
  title: "Digital Health and HCI Researcher",
  email: "obasi@dgist",
  location: "Daegu, Republic of Korea",
  bio: "Researching signals (physiological, wearable, speech) for digital health and mental well-being | M.S. student @ KAIST ICLab",
  image: "/images/photos/profile.jpg",
  socialLinks: {
    github: "https://github.com/gn0219",
    linkedin: "https://www.linkedin.com/in/gyuna/",
    scholar: "https://scholar.google.com/citations?user=YOUR_ID"
  },
  education: [
    {
      degree: "M.S.",
      department: "Graduate School of Data Science",
      departmentUrl: "https://gsds.kaist.ac.kr/",
      institution: "DGIST",
      institutionUrl: "https://www.dgist.ac.kr/",
      year: "2024.02 - Present"
    },
    {
      degree: "B.Sc.",
      department: "Physics",
      departmentUrl: "https://ie.unist.ac.kr/",
      institution: "University of Ilorin (UNILORIN)",
      institutionUrl: "https://www.unilorin.edu.ng/",
      year: "2016.01 - 2021.12"
    }
  ],
  skills: [
  ],
  about: `I am a master's student at [KAIST ICLab](https://ic.kaist.ac.kr/, color=blue), advised by Prof. Uichin Lee.
  My research spans various areas of digital health — from modeling human states using multimodal data, to designing evaluative tools.
  While the specific topics differ, they all share a common goal: leveraging everyday data and technology to support better health outcomes.
  Ultimately, I aim to help build systems that make digital health support more effective, interpretable, and adaptable across different contexts.
`,
  interests: {
    "AI/ML": [
      "AI Healthcare",
      "Digital Phenotyping",
      "Multimodal Data Analysis",
      "LLM Context Engineering"
    ],
    "HCI": [
      "Visual Analytics",
      "Interactive Systems"
    ]
  },
  relatedWebsite: {
    title: "ICLab in KAIST",
    url: "https://kaist-iclab.github.io"
  },
  lab: {
    name: "KAIST ICLab",
    fullName: "KAIST Interactive Computing Laboratory",
    url: "https://ic.kaist.ac.kr/",
    advisor: "Prof. Uichin Lee"
  },
  cvUrl: "/gyuna_cv_2025_4.pdf"
}; 