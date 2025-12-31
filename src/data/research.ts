export interface ResearchInterest {
  title: string;
  description: string;
  keywords: string[];
}

export interface ResearchData {
  interests: ResearchInterest[];
}

export const researchData: ResearchData = {
  interests: [
    
   
    // {
    //   title: "Signal Processing",
    //   description: "Developing signal processing methods to improve the quality and usability of real-world sensor data",
    //   keywords: ["PPG", "Signal Quality", "Wearable Sensors"]
    // }
  ]
}; 