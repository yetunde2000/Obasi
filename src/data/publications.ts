export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  type: 'journal' | 'Conference' | 'workshop' |  'Writing sample' |'thesis';
  doi?: string;
  link?: string;
  slides?: string;
  poster?: string;
  video?: string;
  github?: string;
}

export interface PublicationsData {
  publications: Publication[];
  
}

export const publicationsData: PublicationsData = {
  publications: [
     {
      title: "A Novel Framework for Enhanced Flat Object Manipulation through Reinforcement Learning and Mixed Reality Integration",
      authors: ["John Prada", "Obasi Yetunde Oluwatoyosi", "Cheol Song", ],
      venue: "DBpia",
      year: "2023-11-24",
      type: "Conference",
      link: "http://hdl.handle.net/20.500.11750/57706",
    },
    {
      title: "Understanding Why People Struggle to Integrate RobotsInto Daily Life",
      authors: [ "Obasi Yetunde Oluwatoyosi"],
      venue: "Unpublished Work",
      year: "2025-11-24",
      type: "Writing sample",
      link: "https://drive.google.com/file/d/11_7Ho8WtldXfsTZYEK7kMae96bhojh3z/view?usp=sharing",
    },
    
  ]
}; 