export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  type: 'journal' | 'Conference' | 'workshop' | 'thesis';
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
    
  ]
}; 