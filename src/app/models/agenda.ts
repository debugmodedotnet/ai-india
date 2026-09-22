export interface IAgenda {
    /** Talk title in Markdown (not HTML). */
    title: string;
    speakerName: string;
    speakerPosition: string;
    startTime: string;
    endTime: string;
    /** Talk description in Markdown (not HTML). */
    description: string;
}