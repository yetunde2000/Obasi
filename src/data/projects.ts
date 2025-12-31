export interface Project {
  title: string;
  description: string;
  image?: string;
  startDate: string;
  endDate?: string;
  role: string;
  technologies: string[];
  status: 'ongoing' | 'completed';
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface ProjectsData {
  current: Project[];
  past: Project[];
}

export const projectsData: ProjectsData = {
  current: [
    {
      title: "Learning-Based VR Tracking with Sensor Fusion",
      description: "Developing learning-based models to improve VR controller positional accuracy by fusing VR tracking data with external IMU signals. The project leverages time-series modeling using LSTM and Transformer architectures, evaluated on real-world Unity data, synthetic Isaac Sim data, and human-subject experiments.",
      startDate: "2023-02",
      endDate: "2025-08",
      role: "Research Lead",
      technologies: ["PyTorch",
        "Transformer",
        "LSTM",
        "Sensor Fusion",
        "Unity",
        "Isaac Sim",
        "Time-Series Modeling"],
      status: "completed",
      // image: "/images/projects/mental_llm_eval.png"
    },
    {
      title: "Custom VR–IMU Housing for High-Precision Motion Experiments",
      description: "Designed and fabricated a custom mechanical housing to rigidly mount a VR controller and an external IMU sensor onto a motorized linear stage. The design ensures repeatable sensor alignment, mechanical stability, and minimal rotational offset for precision motion tracking experiments.",
      startDate: "2024-09",
      endDate: "2024-12",
      role: "Mechanical Design and System Integration",
      technologies: [ "SolidWorks",
        "3D Printing",
        "VR Hardware",
        "IMU Sensors",
        "Mechanical Design"],
      status: "completed",
      // image: "/images/projects/multi_agent_coaching.png"
    },
    // {
    //   title: "Enhancing Signal Quality Indices for Real-World PPG Signals",
    //   description: "Improving the reliability of physiological data through real-world PPG signal quality assessment",
    //   startDate: "2025-03",
    //   role: "Project Lead",
    //   technologies: ["Python", "PyTorch", "Signal Processing"],
    //   image: "/images/projects/ppg.png",
    // },
    {
      title: "Developing a mood detection model using Multi-Modal Data",
      description: "Developing a model to detect depression and anxiety using speech and sensor data from wearable, mobile, and IoT devices. This project is being conducted in collaboration with LG Electronics.",
      startDate: "2024-03",
      endDate: "2025-06",
      role: "Methodology and Model Development",
      technologies: ["PyTorch", "Sensor Fusion","Speech Emotion Recognition"],
      status: "completed",
      image: "/images/projects/lg_overview.png",
      links: {
        github: "https://github.com/Kaist-ICLab/multimodal-mh-detection",
        // demo: "https://www.researchgate.net/publication/3710000000000000000"
      }
    },
    {
      title: "Predicting Workload Stress in Call Center Employees",
      description: "Developed a model to predict call center workload by combining audio and text data. Funded by NRF Graduate Research Fellowship for Master's Students (2024.07 – 2025.06)",
      startDate: "2024-07",
      endDate: "2025-05",
      role: "Multimodal Model Development",
      technologies: ["PyTorch", "Hugging Face", "Audio Processing"],
      status: "completed",
      image: "/images/projects/regulation.png",
      links: {
        github: "https://github.com/Kaist-ICLab/EmoWorker"
      }
    },
    {
      title: "Interactive Reporting System for Digital Health Data",
      description: "Designing an interactive reporting system that helps evaluators interpret and explore digital health data with clarity and flexibility.",
      startDate: "2024-08",
      endDate: "2025-05",
      role: "Design and Research Lead",
      technologies: ["Figma", "Visualization"],
      status: "completed",
      image: "/images/projects/report.png",
    },
    
  ],
  past: [
  ]
}; 
