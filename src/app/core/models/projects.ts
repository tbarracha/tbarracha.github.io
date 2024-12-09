import { Icons } from "./icons";
import { Project, ProjectType } from "./project";
import { StaticListModel } from "./StaticListModel";
import { Technologies } from "./technologies";

export class Projects extends StaticListModel<Project> {

    public static readonly DashyHeroes: Project = {
        name: 'Dashy Heroes',
        date: "2020",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: `Dashy Heroes began as a fast-paced mobile game, originally created during an Erasmus experience in the Netherlands with two fellow students.
                
                As a university project, I wore many hats, handling game design and art direction. From crafting the Game Design Document to creating 2D art in Adobe Illustrator and 3D models & animations in Blender.

                Post-graduation, I took it up a notch, refining and polishing the game, for it to make its debut on the Google Play Store.`
            },
            {
                title: "Features",
                content: '★ 8 diverse Heroes\n★ 5 distinctive Spells\n★ 5 fierce Enemies\n★ 3 unique biomes for endless adventures!'
            },
        ],
        types: [ProjectType.Game, ProjectType.Mobile],
        technologies: [Technologies.Unity, Technologies.CSharp],
        links: [
            {
                name: 'Play on APK Pure',
                url: 'https://apkpure.com/dashy-heroes/com.Stardrop.DashyHeroes',
                icon: Icons.Android
            }
        ],
        imgFolder: 'images/projects/dashy_heroes',
        images: [
            "images/projects/dashy_heroes/proj_dashyheroes_0.jpg",
            "images/projects/dashy_heroes/proj_dashyheroes_1.webp",
            "images/projects/dashy_heroes/proj_dashyheroes_2.webp",
            "images/projects/dashy_heroes/proj_dashyheroes_3.webp"
        ]
    };

    public static readonly Talkative: Project = {
        name: 'Talkative: Break the Ice',
        date: "2022",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: 'Talkative was crafted as your go-to app to spark engaging conversations. It’s packed with questions and dares across categories, from casual to professional, and even a little daring—perfect for breaking the ice with just a little swipe!'
            },
            {
                title: "Features",
                content: '★ 5 diverse Categories\n★ 5 distinctive Fun & Spicy Tags\n★ Awesome effects!'
            },
        ],
        types: [ProjectType.Mobile, ProjectType.App],
        technologies: [Technologies.Unity, Technologies.CSharp],
        links: [
            {
                name: 'Play on APK Pure',
                url: 'https://apkpure.com/talkative-break-the-ice/com.StardropDev.TalkativeBreaktheIce',
                icon: Icons.Android
            }
        ],
        imgFolder: 'images/projects/talkative',
        images: [
            "images/projects/talkative/proj_talkative_0.webp",
            "images/projects/talkative/proj_talkative_1.webp",
            "images/projects/talkative/proj_talkative_2.webp",
            "images/projects/talkative/proj_talkative_3.webp",
            "images/projects/talkative/proj_talkative_4.webp",
        ]
    };

    public static readonly Pokedex: Project = {
        name: 'Pokedex Web App',
        date: "2024",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: `Your very own online Pokedex! Browse through Pokémon, hear their unique cries, and dive into details. Built with Angular and designed for all Pokémon fans.
                
                Developed for a frontend course, this Pokedex app combines Angular skills with PokeAPI for a truly interactive experience. It’s built around best practices in Angular, from routing to services. The final product, hosted on Netlify, is a vibrant Pokémon exploration tool with a few quirky surprises!`
            }
        ],
        types: [ProjectType.Web, ProjectType.App],
        technologies: [Technologies.Angular, Technologies.Typescript, Technologies.TailwindCss, Technologies.Netlify],
        links: [
            {
                name: 'Website',
                url: 'https://pokecatalogue.netlify.app/',
                icon: Icons.Internet
            },
            {
                name: 'Github',
                url: 'https://github.com/tbarracha/DSPA-Pokedex-Angular-Webapp',
                icon: Icons.GitHub
            }
        ],
        imgFolder: 'images/projects/pokedex',
        images: [
            "images/projects/pokedex/proj_pokedex_0.png",
            "images/projects/pokedex/proj_pokedex_1.png",
            "images/projects/pokedex/proj_pokedex_2.png",
            "images/projects/pokedex/proj_pokedex_3.png",
            "images/projects/pokedex/proj_pokedex_4.png",
        ]
    };

    public static readonly FunBlocksMerge: Project = {
        name: 'Fun Blocks Merge!',
        date: "2024",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: `Get ready for a cube-crafting adventure! Merge, match, and dominate with each level in this colorful, dynamic game.
                
                Fun Blocks Merge was inspired by my game development days on Roblox. It’s the first in a series of one-game-per-month challenges, designed to kickstart creativity and hone skills. It’s colorful, it’s fun, and it’s all about merging those blocks!`
            }
        ],
        types: [ProjectType.Mobile, ProjectType.Game],
        technologies: [Technologies.Unity, Technologies.CSharp],
        links: [
            {
                name: 'Google Play (deprecated)',
                url: 'https://play.google.com/store/apps/details?id=com.Stardrop.FunBlocksMerge&hl=en',
                icon: Icons.PlayStore
            }
        ],
        imgFolder: 'images/projects/funblocks_merge',
        images: [
            "images/projects/funblocks_merge/proj_funblocksmerge_0.png",
            "images/projects/funblocks_merge/proj_funblocksmerge_1.webp",
            "images/projects/funblocks_merge/proj_funblocksmerge_2.webp",
            "images/projects/funblocks_merge/proj_funblocksmerge_3.webp",
        ]
    };

    public static readonly SwipeBlade: Project = {
        name: 'Swipe Blade!',
        date: "2024",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: `Swipe Blade was my second game in the one-game-per-month challenge. Developed in just three weeks, it’s a swiping, slicing action game that takes quick reflexes and even quicker thinking!`
            }
        ],
        types: [ProjectType.Web, ProjectType.Game],
        technologies: [Technologies.Unity, Technologies.CSharp],
        links: [
            {
                name: 'Play on itch.io',
                url: 'https://stardropdev.itch.io/swipe-blade',
                icon: Icons.Gamepad
            },
            {
                name: 'Github',
                url: 'https://github.com/tbarracha/Swipe-Blade',
                icon: Icons.GitHub
            }
        ],
        imgFolder: 'images/projects/swipeblade',
        images: [
            "images/projects/swipeblade/proj_swipeblade_0.png",
            "images/projects/swipeblade/proj_swipeblade_1.png",
            "images/projects/swipeblade/proj_swipeblade_2.png",
            "images/projects/swipeblade/proj_swipeblade_3.png",
        ]
    };

    public static readonly Portfolio: Project = {
        name: 'Portfolio Website',
        date: "2024",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: 'This portfolio was built to showcase my work and skills, using Angular and Tailwind CSS. The current version is hosted on Netlify, but I’m exploring even more streamlined hosting with Hetzner in the near future.'
            }
        ],
        types: [ProjectType.Web, ProjectType.Mobile],
        technologies: [Technologies.Angular, Technologies.Typescript, Technologies.TailwindCss, Technologies.Netlify],
        links: [
            {
                name: 'Website',
                url: 'https://tiagobarracha.netlify.app/',
                icon: Icons.Netlify
            }
        ],
        imgFolder: 'images/projects/portfolio',
        images: [
            "images/projects/portfolio/proj_portfolio_0.png",
            "images/projects/portfolio/proj_portfolio_1.png",
            "images/projects/portfolio/proj_portfolio_2.png",
            "images/projects/portfolio/proj_portfolio_3.png",
        ]
    };

    public static readonly EmojiLib: Project = {
        name: 'Emoji Library',
        date: "2024",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: "Emoji Lib is the ultimate tool to spice up your projects with emojis! It’s fast, fun, and ridiculously easy to use. Search, filter, and copy emojis in seconds, with a sleek design that fits anywhere. Whether you're building the next big app or just want to make people smile, Emoji Lib has you covered."
            }
        ],
        types: [ProjectType.App, ProjectType.Web, ProjectType.Mobile],
        technologies: [Technologies.Angular, Technologies.Typescript, Technologies.TailwindCss, Technologies.Netlify],
        links: [
            {
                name: 'Live Demo',
                url: 'https://emojilib.netlify.app/',
                icon: Icons.Netlify
            },
            {
                name: 'Github',
                url: 'https://github.com/tbarracha/ng-emoji-library',
                icon: Icons.GitHub
            }
        ],
        imgFolder: 'images/projects/emoji_lib',
        images: [
            "images/projects/emoji_lib/proj_emoji_lib_0.png",
            "images/projects/emoji_lib/proj_emoji_lib_1.png",
        ]
    };

    public static readonly StardropTools: Project = {
        name: 'Stardrop Tools',
        date: "2023",
        employer: 'Personal',
        sections: [
            {
                title: "Premise",
                content: `
                Stardrop Tools is my personal suite of Unity scripting utilities, crafted to streamline the game development process with speed and precision.

                These tools are built to tackle repetitive tasks, boost productivity, and create a smoother, more enjoyable development experience, bringing a little extra magic to each project!
                `,
            }
        ],
        types: [ProjectType.Other],
        technologies: [Technologies.Unity, Technologies.CSharp],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/StardropDev/Stardrop-Tools-Unity',
                icon: Icons.GitHub
            }
        ],
        imgFolder: 'images/projects/stardrop_tools',
        images: [
            "images/projects/stardrop_tools/proj_stardrop_tools_0.png",
        ]
    };

    
    public static readonly FifaFootblocks: Project = {
        name: 'Fifa Footblocks',
        date: "2023",
        employer: 'The Gang Sweden',
        sections: [
            {
                title: "Premise",
                content: `While at <a href="https://www.thegang.io/" target="_blank" rel="noopener noreferrer" class="text-main-hl-primary hover:underline">The Gang Sweden</a>, I took on the challenge of developing the Goalkeeper AI for Fifa Footblocks, a popular Roblox game.
                
                It was all about capturing the thrill of the sport while delivering reliable, smart AI!`
            }
        ],
        types: [ProjectType.Game],
        technologies: [Technologies.Roblox, Technologies.Lua],
        links: [
            {
                name: 'The Gang Sweden',
                url: 'https://www.thegang.io/',
                icon: Icons.Internet
            },
            {
                name: 'Play on Roblox',
                url: 'https://www.roblox.com/games/13982397897/FIFA-Footblocks-Soccer',
                icon: Icons.Roblox
            }
        ],
        imgFolder: 'images/projects/the_gang_sweden/fifa_footblocks',
        images: [
            "images/projects/the_gang_sweden/fifa_footblocks/proj_fifa_footblocks_1.webp",
            "images/projects/the_gang_sweden/fifa_footblocks/proj_fifa_footblocks_2.webp",
            "images/projects/the_gang_sweden/fifa_footblocks/proj_fifa_footblocks_0.png",
        ]
    };
    
    public static readonly IHeartRadioTycoon: Project = {
        name: 'iHeart Radio Tycoon',
        date: "2023",
        employer: 'The Gang Sweden',
        sections: [
            {
                title: "Premise",
                content: `Working on <a href="https://www.thegang.io/" target="_blank" rel="noopener noreferrer" class="text-main-hl-primary hover:underline">The Gang Sweden's</a> team, I crafted interactive NPCs, scavenger hunts, enemy AI, and combat systems for iHeart Radio Tycoon.
                
                The game combines engaging gameplay with the recognizable iHeart brand in an exciting, player-centered experience!`
            }
        ],
        types: [ProjectType.Game],
        technologies: [Technologies.Roblox, Technologies.Lua],
        links: [
            {
                name: 'The Gang Sweden',
                url: 'https://www.thegang.io/',
                icon: Icons.Internet
            },
            {
                name: 'Play on Roblox',
                url: 'https://www.roblox.com/games/9524757503/Tycoon-but-it-s-iHeartLand',
                icon: Icons.Roblox
            }
        ],
        imgFolder: 'images/projects/the_gang_sweden/iheart_radio',
        images: [
            "images/projects/the_gang_sweden/iheart_radio/proj_iheart_radio_0.webp",
            "images/projects/the_gang_sweden/iheart_radio/proj_iheart_radio_1.webp",
            "images/projects/the_gang_sweden/iheart_radio/proj_iheart_radio_2.webp",
            "images/projects/the_gang_sweden/iheart_radio/proj_iheart_radio_3.webp",
            "images/projects/the_gang_sweden/iheart_radio/proj_iheart_radio_4.png",
        ]
    };
    
    public static readonly GucciTown: Project = {
        name: 'Gucci Town',
        date: "2023",
        employer: 'The Gang Sweden',
        sections: [
            {
                title: "Premise",
                content: `On this project with <a href="https://www.thegang.io/" target="_blank" rel="noopener noreferrer" class="text-main-hl-primary hover:underline">The Gang Sweden</a>, I was responsible for NPC interactions, scavenger hunts, and a soccer minigame in Gucci Town, merging luxury branding with immersive gaming experiences.`
            }
        ],
        types: [ProjectType.Game],
        technologies: [Technologies.Roblox, Technologies.Lua],
        links: [
            {
                name: 'The Gang Sweden',
                url: 'https://www.thegang.io/',
                icon: Icons.Internet
            },
            {
                name: 'Play on Roblox (Deprecated)',
                url: 'https://www.roblox.com/games/7830918930/UPDATE-Gucci-Town',
                icon: Icons.Roblox
            }
        ],
        imgFolder: 'images/projects/the_gang_sweden/gucci_town',
        images: [
            "images/projects/the_gang_sweden/gucci_town/proj_gucci_town_0.webp",
            "images/projects/the_gang_sweden/gucci_town/proj_gucci_town_1.webp",
            "images/projects/the_gang_sweden/gucci_town/proj_gucci_town_2.webp",
            "images/projects/the_gang_sweden/gucci_town/proj_gucci_town_3.png",
        ]
    };    
}

export const FeaturedProjects: Project[] = [
    Projects.DashyHeroes,
    Projects.Pokedex,
    Projects.Portfolio
] as const;