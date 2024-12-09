import { StaticListModel } from "./StaticListModel";

export interface Experience {
    year: string;
    sections: {
        title: string;
        description: string;
    }[];
}

export class ExperiencesWork extends StaticListModel<Experience> {
    public static readonly Minsait: Experience = {
        year: '2024',
        sections: [
          {
            title: 'AI Consultant <span class="italic font-pt-serif text-primary">- Minsait</span>',
            description: 'Spearheaded high-impact AI innovations — think 3D avatar chatbots, automated documentation, and ultra-secure, on-site language models for sensitive data.'
          },
          {
            title: 'Fullstack Developer <span class="italic font-pt-serif text-primary">- Minsait</span>',
            description: 'Engineered project development with Angular and ASP.NET Core, driving modernization for platforms - EDP Renewables, Santander, and internal projects.'
          }
        ]
    };

    public static readonly TheGangSweden: Experience = {
        year: '2022',
        sections: [
          {
            title: 'Game Developer <span class="italic font-pt-serif text-primary">- The Gang Sweden</span>',
            description: 'Elevated user experience by designing & implementing AI and dialogue systems for big names like FIFA and iHeartRadio.'
          }
        ]
    };

    public static readonly Swisper: Experience = {
        year: '2021',
        sections: [
          {
            title: 'Unity Developer <span class="italic font-pt-serif text-primary">- Swisper</span>',
            description: 'Innovated in health tech by developing immersive spatial audio and a breathing aid for users focused on well-being.'
          }
        ]
    };
}

export class ExperiencesEducation extends StaticListModel<Experience> {
    public static readonly University: Experience = {
        year: '2020',
        sections: [
          {
            title: 'Bachelor in Digital Game Design and Development <br /><span class="italic font-pt-serif text-primary">IPB - Instituto Politécnico de Bragança</span>',
            description: 'Game Art, Design and Programming.'
          }
        ]
    };
    public static readonly Upskill: Experience = {
        year: '2023',
        sections: [
          {
            title: 'Certificate in Java+DotNet <br /><span class="italic font-pt-serif text-primary">IPP - Instituto Politécnico do Porto</span>',
            description: 'Angular, Java & C sharp DotNet development.'
          }
        ]
    };

    public static readonly LSDCerticifactions: Experience = {
        year: '2017',
        sections: [
          {
            title: 'Cerfiticate in Game Design <br /><span class="italic font-pt-serif text-primary">LSD - Lisbon School of Design</span>',
            description: 'Game Design.'
          }
        ]
    };
}