export interface ISpeakers {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
    flag: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
    previousTalks: { title?: string; event?: string; link?: string; }[];
}