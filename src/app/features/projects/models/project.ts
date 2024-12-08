import { StaticListModel } from "../../../core/models/StaticListModel";
import { Technology } from "../../technologies/models/technologies";

export interface Project {
    name: string;
    description: string;
    year: number;
    employer: string;
    client: string;
    category: ProjectCategory;
    types: string[];
    technologies: Technology[];
}

export class ProjectCategory extends StaticListModel<string> {
    static readonly Work: string = "Work";
    static readonly Play: string = "Play";
}

export class ProjectType extends StaticListModel<string> {
    static readonly Featured: string = "Featured";
    static readonly Web: string = "Web";
    static readonly Mobile: string = "Mobile";
    static readonly Desktop: string = "Desktop";
    static readonly Game: string = "Game";
    static readonly API: string = "API";
    static readonly AI: string = "AI";
    static readonly Tool: string = "Tool";
}