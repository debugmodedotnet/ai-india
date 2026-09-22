export interface ISpeakers {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
    flag: string;
    linkedin?: string;
    nomadcoder?: string;
    previousTalks: { title?: string; event?: string; link?: string; }[];
}