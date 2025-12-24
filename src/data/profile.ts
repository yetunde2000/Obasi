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
  title: "Researcher in Virtual Reality and Deep Learning for Microsurgical Applications",
  email: "olaopin_5@dgist.ac.kr",
  location: "Daegu, Republic of Korea",
  bio: "Post Masters Researcher @ DGIST/ Robotic and Mechatronics Engineering",
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
  about: `I am a  post-master’s researcher  at [DGIST IBOM](https://ibom.dgist.ac.kr/, color=blue), advised by Prof. Cheol Song in the Department of Robotics and Mechatronics Engineering. 
My research focuses on enhancing VR tracking accuracy through sensor fusion and learning-based signal processing, 
utilizing models such as the Transformer and Time2Vec. I am particularly interested in measurement-driven approaches that improve the robustness and precision of immersive systems for fine-scale manipulation tasks.
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
    title: "IBOM in DGIST",
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