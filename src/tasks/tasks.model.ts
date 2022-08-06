export interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    description: string;
}


export enum TaskStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    PENDING = 'IN-PROGRESS'
}