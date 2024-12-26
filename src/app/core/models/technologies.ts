import { Icons } from "./icons";
import { StaticListModel } from "./StaticListModel";

export interface Technology {
    name: string;
    description: string;
    url: string;
    logo?: string;
    icon?: string;
}

export class TechnologyType extends StaticListModel<string> {
    public static readonly Frontend: string = 'Frontend';
    public static readonly Backend: string = 'Backend';
    public static readonly Database: string = 'Database';
    public static readonly DevOps: string = 'DevOps';
}

export class ProgrammingLanguages extends StaticListModel<string> {
    public static readonly CSharp: string = 'C#';
    public static readonly Java: string = 'Java';
    public static readonly Python: string = 'Python';
    public static readonly TypeScript: string = 'TypeScript';
    public static readonly JavaScript: string = 'JavaScript';
    public static readonly CSS: string = 'CSS';
    public static readonly HTML: string = 'HTML';
}

export class Technologies extends StaticListModel<Technology> {

    public static readonly Angular: Technology = {
        name: 'Angular',
        description: 'Web Framework',
        url: 'https://angular.dev/',
        icon: Icons.Angular
    };

    public static readonly Typescript: Technology = {
        name: 'TypeScript',
        description: 'Javascript 3.0',
        url: 'https://tailwindcss.com/',
        icon: Icons.Typescript
    };

    public static readonly TransformersJS: Technology = {
        name: 'TransformersJS',
        description: 'In-Browser LLMs',
        url: 'https://huggingface.co/docs/transformers.js/en/index',
        icon: Icons.AiBrain
    };

    public static readonly TailwindCss: Technology = {
        name: 'Tailwind CSS',
        description: 'CSS framework',
        url: 'https://tailwindcss.com/',
        icon: Icons.TailwindCSS
    };

    public static readonly DotNetCore: Technology = {
        name: 'Dot Net',
        description: 'C# Framework',
        url: 'https://dotnet.microsoft.com/',
        icon: Icons.DotNetCore
    };

    public static readonly Unity: Technology = {
        name: 'Unity',
        description: 'Game Engine',
        url: 'https://unity.com/',
        icon: Icons.Unity
    };

    public static readonly CSharp: Technology = {
        name: 'C#',
        description: 'Programming Language',
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        icon: Icons.CSharp
    };

    public static readonly Python: Technology = {
        name: 'Python',
        description: 'Data & AI',
        url: 'https://www.python.org/',
        icon: Icons.Python
    };

    public static readonly Docker: Technology = {
        name: 'Docker',
        description: 'Containerization',
        url: 'https://www.docker.com/',
        icon: Icons.Docker
    };

    public static readonly PostgreSQL: Technology = {
        name: 'PostgreSQL',
        description: 'OP Database',
        url: 'https://www.postgresql.org/',
        icon: Icons.PostgresSQL
    };

    public static readonly Git: Technology = {
        name: 'Git',
        description: 'Version Control',
        url: 'https://git-scm.com/',
        icon: Icons.Git
    };
    
    public static readonly Android: Technology = {
        name: 'Android',
        description: 'Mobile Development Platform',
        url: 'https://developer.android.com/',
        icon: Icons.Android
    };
    
    public static readonly Apple: Technology = {
        name: 'Apple',
        description: 'iOS Development',
        url: 'https://developer.apple.com/',
        icon: Icons.Apple
    };
    
    public static readonly Roblox: Technology = {
        name: 'Roblox',
        description: 'Game Development Platform',
        url: 'https://www.roblox.com/',
        icon: Icons.Roblox
    };

    public static readonly Lua: Technology = {
        name: 'Lua',
        description: 'Scripting Language',
        url: 'https://www.lua.org/',
        icon: Icons.Lua
    };
    
    public static readonly PlayStore: Technology = {
        name: 'Google Play',
        description: 'Android App Distribution',
        url: 'https://play.google.com/',
        icon: Icons.PlayStore
    };
    
    public static readonly AppStore: Technology = {
        name: 'App Store',
        description: 'iOS App Distribution',
        url: 'https://www.apple.com/app-store/',
        icon: Icons.AppStore
    };
    
    public static readonly Netlify: Technology = {
        name: 'Netlify',
        description: 'Web Hosting',
        url: 'https://www.netlify.com/',
        icon: Icons.Netlify
    };
}