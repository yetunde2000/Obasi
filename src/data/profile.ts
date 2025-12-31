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
  name: "Obasi Yetunde Oluwatoyosi",
  title: "Improving VR Tracking with AI & Sensor Fusion",
  email: "olaopin_5@dgist.ac.kr",
  location: "Daegu, Republic of Korea",
  bio: "Post-Master’s Researcher, DGIST IROM",
  image: "/images/photos/profile_yetty.jpeg",
  socialLinks: {
    github: "https://github.com/yetunde2000",
    linkedin: "https://www.linkedin.com/in/yetunde-1996my/",
    //scholar: "https://scholar.google.com/citations?user=YOUR_ID"
  },
  education: [
    {
      degree: "M.Sc.",
      department: "Artificial Intelligence",
      departmentUrl: "https://gsds.kaist.ac.kr/",
      institution: "DGIST",
      institutionUrl: "https://www.dgist.ac.kr/",
      year: "2023.02 - 2025.08"
    },
    {
      degree: "B.Sc.",
      department: "Physics",
      departmentUrl: "https://ie.unist.ac.kr/",
      institution: "University of Ilorin (UNILORIN)",
      institutionUrl: "https://www.unilorin.edu.ng/",
      year: "2016.01 - 2021.10"
    }
  ],
  skills: [ "Python", "Solidworks", "Unity", "Isaac sim", "Latex", "LabVIEW"
  ],
  about: `I am a  post-master’s researcher  at [DGIST IROM](https://ibom.dgist.ac.kr/, color=blue), in the Department of Robotics and Mechatronics Engineering. 
My research focuses on improving VR tracking accuracy through sensor fusion and learning-based signal processing, with an emphasis on Transformer-based models and Time2Vec representations.
I am particularly interested in measurement-driven approaches that enhance the robustness and precision of immersive systems for fine-scale manipulation and control.
`,



  interests: {
    "AI/ML": [
      "Virtual Reality",
      "Deep Learning & Human-computer Interaction",
      "Natural Language Processing",
      "Interaction Design"
    ],
    "HCI": [
    ]
  },
  relatedWebsite: {
    title: "IROM in DGIST",
    url: "https://kaist-iclab.github.io"
  },
  lab: {
    name: "DGIST IBOM",
    fullName: "IBOM Laboratory",
    url: "https://ibom.dgist.ac.kr/",
    advisor: "Prof. Cheol Song"
  },
  cvUrl: "/Obas Yetunde_cv.pdf"
}; 