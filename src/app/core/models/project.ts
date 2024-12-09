import { StaticListModel } from "../../core/models/StaticListModel";
import { Technology } from "../../core/models/technologies";

export interface Project {
    name: string;
    date: string;
    employer: string;
    sections: { title: string, content: string }[];
    types: string[];
    technologies: Technology[];
    links: { name: string, icon: string, url: string }[];
    imgFolder: string;
    images?: string[];
}

export class ProjectType extends StaticListModel<string> {
    static readonly Featured: string = "Featured";
    static readonly All: string = "All";
    static readonly Web: string = "Web";
    static readonly App: string = "App";
    static readonly Mobile: string = "Mobile";
    static readonly Desktop: string = "Desktop";
    static readonly Game: string = "Game";
    static readonly API: string = "API";
    static readonly AI: string = "AI";
    static readonly Tool: string = "Tool";
    static readonly Other: string = "Other";
}