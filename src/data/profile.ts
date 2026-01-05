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
 title: "Post-Master’s Researcher in Virtual Reality and Learning-Based Systems",
 email: "olaopin_5@dgist.ac.kr",
 location: "Daegu, Republic of Korea",
 bio: "Post-master’s researcher at DGIST IROM, Department of Robotics and Mechatronics Engineering. My research focuses on improving VR tracking accuracy through sensor fusion and learning-based signal processing, with applications to precise immersive and microsurgical interaction.",
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
  about: `I am a post-master’s researcher at [DGIST](https://sites.google.com/view/dgist-ibom), in the Department of Robotics and Mechatronics Engineering. 
My work focuses on Virtual Reality and Mixed Reality, where I explore human–computer interaction through immersive and interactive systems. I have experience designing and implementing AI-driven systems, with a strong background in deep learning and machine learning applied to real-world research problems.



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
    url: "https://sites.google.com/view/dgist-ibom"
  },
  lab: {
    name: "DGIST IROM",
    fullName: "IROM Laboratory",
    url: "https://sites.google.com/view/dgist-ibom",
    advisor: "Prof. Cheol Song"
  },
  cvUrl: "/Obas Yetunde_cv.pdf"
}; 