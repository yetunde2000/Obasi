export interface Experience {
  role: string;
  experiences: {
    year: string;
    title: string;
    institution: string;
  }[];
}

export const experienceData: Experience[] = [

  {
    role: "Teaching & Academic Support",
    experiences: [
      {
        year: "January 2025 - December 2025",
        title: "DGIST International student association (DISA) PR & Media Team ",
        institution: "DGIST"
      },
      {
        year: "June 2025 - August 2025",
        title: "Mentored intern students for research projects in AI ",
        institution: "DGIST"
      },
      {
        year: "January 2024 - December 2024",
        title: "DGIST International student association (DISA) PR & Media Team ",
        institution: "DGIST"
      },
      {
        year: "August 2024 - December 2024",
        title: "Teaching Assistant(TA) for physics course",
        institution: "DGIST"
      },
      {
        year: "Nov 2022 – Oct 2023",
        title: "National Youth Service Corps (NYSC); Physics Tutor",
        institution: "BenGee Model College, Agege, Lagos State, Nigeria"
      }
    ]
  },
  {
    role: "Mentorship & Outreach",
    experiences: [

      {
        year: "Nov 2022 – April 2023",
        title: "Operation Feed; Volunteer ",
        institution: "Inspired Smiles Foundation, Lagos, Nigeria"
      }
    ]
  }
]; 