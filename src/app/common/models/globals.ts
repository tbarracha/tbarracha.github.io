import { PositionInList, ProjectType, Technology } from "./enums";
import { Project } from "./models";

export const projects : Project[] = [
    {
        id: '1',
        name: 'Dashy Heroes',
        description: 'Dashy Heroes is a 2D platformer game where you play as a hero who can dash through enemies to defeat them. The game is built using Unity and C#.',
        images: [
            '/assets/images/projects/dashy_heroes/proj_dashyheroes_0.webp',
            '/assets/images/projects/dashy_heroes/proj_dashyheroes_1.webp',
            '/assets/images/projects/dashy_heroes/proj_dashyheroes_2.webp',
            '/assets/images/projects/dashy_heroes/proj_dashyheroes_3.webp',
        ],
        link: 'https://apkpure.com/dashy-heroes/com.Stardrop.DashyHeroes',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Mobile, 
            ProjectType.Game
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ],
        positionInList: PositionInList.First,
    },
    {
        id: '2',
        name: 'Talkative: Break the Ice',
        description: 'In need of a conversation icebreaker? Having a hard time coming up with conversation topics? Talkative helps you with both, suggesting various questions or dares based on topics of your choice! Just swipe and find something new to say!',
        images: [
            '/assets/images/projects/talkative/proj_talkative_0.webp',
            '/assets/images/projects/talkative/proj_talkative_1.webp',
            '/assets/images/projects/talkative/proj_talkative_2.webp',
            '/assets/images/projects/talkative/proj_talkative_3.webp',
            '/assets/images/projects/talkative/proj_talkative_4.webp',
        ],
        link: 'https://apkpure.com/talkative-break-the-ice/com.StardropDev.TalkativeBreaktheIce',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Mobile, 
            ProjectType.App
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ],
        positionInList: PositionInList.Middle,
    },
    {
        id: '3',
        name: 'Pokedex Web App',
        description: 'A Pokedex web app built using Angular and PokeAPI. The app displays a list of Pokemon and their details.',
        images: [
            '/assets/images/projects/pokedex/proj_pokedex_0.png',
            '/assets/images/projects/pokedex/proj_pokedex_1.png',
        ],
        link: 'https://pokecatalogue.netlify.app/home',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Web, 
            ProjectType.App
        ],
        technologies: [
            Technology.Angular,
            Technology.TypeScript
        ],
        positionInList: PositionInList.Middle,
    },
    {
        id: '4',
        name: 'Fun Blocks Merge!',
        description: 'Get ready to unleash your cube-crafting genius! Merge, match, and conquer in this colorful cube-tastic adventure!',
        images: [
            '/assets/images/projects/funblocks_merge/proj_funblocksmerge_0.png',
            '/assets/images/projects/funblocks_merge/proj_funblocksmerge_1.webp',
            '/assets/images/projects/funblocks_merge/proj_funblocksmerge_2.webp',
            '/assets/images/projects/funblocks_merge/proj_funblocksmerge_3.webp',
        ],
        link: 'https://play.google.com/store/apps/details?id=com.Stardrop.FunBlocksMerge&hl=en',
        gitHubLink: '',
        projectTypes: [
            ProjectType.Mobile, 
            ProjectType.Game
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ],
        positionInList: PositionInList.Middle,
    },
    {
        id: '5',
        name: 'Swipe Blade!',
        description: 'Swipe Blade is a fast-paced, action-packed game where you swipe to cut through enemies and obstacles. The game is built using Unity and C#.',
        images: [
            '/assets/images/projects/swipeblade/proj_swipeblade_0.png',
            '/assets/images/projects/swipeblade/proj_swipeblade_1.png',
            '/assets/images/projects/swipeblade/proj_swipeblade_2.png',
            '/assets/images/projects/swipeblade/proj_swipeblade_3.png',
        ],
        link: 'https://stardropdev.itch.io/swipe-blade',
        gitHubLink: 'https://github.com/tbarracha/Swipe-Blade',
        projectTypes: [
            ProjectType.Web, 
            ProjectType.Game
        ],
        technologies: [
            Technology.Unity,
            Technology.CSharp
        ],
        positionInList: PositionInList.Last,
    }
];