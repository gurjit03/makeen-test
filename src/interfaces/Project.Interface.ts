export type Status = "request" | "running" | "done";: 

export interface Project {
    seq: number;
    id: string;
    name: string;
    status: Status;
    duration: {
        start: Date;
        end: Date;
    };
    description: string;
}

