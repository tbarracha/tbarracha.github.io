import { ProjectType, Technology } from "./enums";
import { Project, TechnologyObj } from "./models";

export const technologies : TechnologyObj[] = [
    
];

export const projects : Project[] = [
    {
        id: '1',
        name: 'Dashy Heroes',
        description: 'Dashy Heroes is a 2D platformer game where you play as a hero who can dash through enemies to defeat them. The game is built using Unity and C#.',
        image: '/assets/images/proj_dashyheroes.webp',
        link: 'https://apkpure.com/dashy-heroes/com.Stardrop.DashyHeroes',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Mobile, 
            ProjectType.Game
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ]
    },
    {
        id: '2',
        name: 'Talkative: Break the Ice',
        description: 'In need of a conversation icebreaker? Having a hard time coming up with conversation topics? Talkative helps you with both, suggesting various questions or dares based on topics of your choice! Just swipe and find something new to say!',
        image: '/assets/images/proj_talkative.webp',
        link: 'https://apkpure.com/talkative-break-the-ice/com.StardropDev.TalkativeBreaktheIce',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Mobile, 
            ProjectType.App
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ]
    },
    {
        id: '3',
        name: 'Pokedex Web App',
        description: 'A Pokedex web app built using Angular and PokeAPI. The app displays a list of Pokemon and their details.',
        image: '/assets/images/proj_pokedex_3.png',
        link: 'https://pokecatalogue.netlify.app/home',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Web, 
            ProjectType.App
        ],
        technologies: [
            Technology.Angular,
            Technology.TypeScript
        ]
    },
    {
        id: '4',
        name: 'Fun Blocks Merge!',
        description: 'Get ready to unleash your cube-crafting genius! Merge, match, and conquer in this colorful cube-tastic adventure!',
        image: '/assets/images/proj_funblocksmerge.webp',
        link: 'https://play.google.com/store/apps/details?id=com.Stardrop.FunBlocksMerge&hl=en',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Mobile, 
            ProjectType.Game
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ]
    },
    {
        id: '5',
        name: 'Swipe Blade!',
        description: 'Swipe Blade is a fast-paced, action-packed game where you swipe to cut through enemies and obstacles. The game is built using Unity and C#.',
        image: '/assets/images/proj_swipeblade.png',
        link: 'https://stardropdev.itch.io/swipe-blade',
        gitHubLink: 'https://github.com/tbarracha/Swipe-Blade',
        projectTypes: [
            ProjectType.Web, 
            ProjectType.Game
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ]
    }
];