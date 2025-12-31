export interface Project {
  title: string;
  description: string;
  image?: string; // optional by design
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
      description:
        "Developing learning-based models to improve VR controller positional accuracy by fusing VR tracking data with external IMU signals. The project leverages time-series modeling using LSTM and Transformer architectures, evaluated on real-world Unity data, synthetic Isaac Sim data, and human-subject experiments.",
      startDate: "2023-02 ",
      endDate: "2025-08",
      role: "Researcher – Model Development and Experimental Evaluation",
      technologies: [
        "PyTorch",
        "Transformer",
        "LSTM",
        "Sensor Fusion",
        "Unity",
        "Isaac Sim",
        "Time-Series Modeling"
      ],
      status: "completed"
    }
  ],

  past: [
    {
      title: "Custom VR–IMU Housing for High-Precision Motion Experiments",
      description:
        "Designed and fabricated a custom mechanical housing to rigidly mount a VR controller and an external IMU sensor onto a motorized linear stage. The design ensures repeatable sensor alignment, mechanical stability, and minimal rotational offset for precision motion tracking experiments.",
      startDate: "2024-09",
      endDate: "2024-11",
      role: "Mechanical Design and System Integration",
      technologies: [
        "SolidWorks",
        "3D Printing",
        "VR Hardware",
        "IMU Sensors",
        "Mechanical Design"
      ],
      status: "completed"
    },

    {
      title: "Synthetic Trajectory Generation for VR Sensor Fusion",
      description:
        "Developed a synthetic data generation pipeline using Isaac Sim to produce controlled motion trajectories with synchronized position and acceleration signals. The dataset was used for pre-training and robustness evaluation of learning-based VR tracking models.",
      startDate: "2024-02",
      endDate: "2025-08",
      role: "Simulation and Data Engineering",
      technologies: [
        "Isaac Sim",
        "Python",
        "Simulation",
        "Synthetic Data",
        "Time-Series Analysis"
      ],
      status: "completed"
    },

    {
      title: "Time-Series Learning for Real and Synthetic VR Motion Data",
      description:
        "Trained and evaluated LSTM and Transformer models on time-series motion data collected from Unity-based real-world experiments and synthetic trajectories generated in Isaac Sim. The project focused on improving robustness and generalization across simulation and real-world environments.",
      startDate: "2023-08",
      endDate: "2025-08",
      role: "Model Training and Analysis",
      technologies: [
        "PyTorch",
        "LSTM",
        "Transformer",
        "Unity",
        "Isaac Sim",
        "Time-Series Data"
      ],
      status: "completed"
    },

    {
      title: "Korean–English Neural Machine Translation using Transformers",
      description:
        "Implemented a Transformer-based neural machine translation model for Korean-to-English translation as part of a graduate-level deep learning course. The project explored attention mechanisms, tokenization strategies, and sequence-to-sequence learning.",
      startDate: "2024-08",
      endDate: "2024-12",
      role: "Model Implementation and Analysis",
      technologies: [
        "Transformer",
        "PyTorch",
        "Natural Language Processing",
        "Sequence-to-Sequence Learning"
      ],
      status: "completed"
    }
  ]
};
