export interface Technology {
    name: string;
    description: string;
    logo: string;
    url: string;
    icon?: string;
}

export const Angular : Technology = {
    name: 'Angular',
    description: 'A powerful framework for building mobile and desktop applications',
    logo: 'assets/images/angular.png',
    url: 'https://angular.io/'
};

export const DotNetCore : Technology = {
    name: '.NET Core',
    description: 'A free, cross-platform, open-source developer platform for building many different types of applications',
    logo: 'assets/images/dotnet-core.png',
    url: 'https://dotnet.microsoft.com/'
};

export const Unity : Technology = {
    name: 'Unity',
    description: 'A cross-platform game engine developed by Unity Technologies',
    logo: 'assets/images/unity.png',
    url: 'https://unity.com/'
};

export const TailwindCss : Technology = {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom designs',
    logo: 'assets/images/tailwindcss.png',
    url: 'https://tailwindcss.com/'
};

export const Docker : Technology = {
    name: 'Docker',
    description: 'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers',
    logo: 'assets/images/docker.png',
    url: 'https://www.docker.com/'
};

export const Python : Technology = {
    name: 'Python',
    description: 'An interpreted, high-level, general-purpose programming language',
    logo: 'assets/images/python.png',
    url: 'https://www.python.org/'
};