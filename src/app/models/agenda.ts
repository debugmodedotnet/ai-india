export interface IAgenda {
    title: string;
    speakerName: string;
    speakerPosition: string;
    speakerImage: string;
    startTime: string;
    endTime: string;
    /** Talk description in Markdown (not HTML). */
    description: string;
}