export interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    description: string;
}


export enum TaskStatus {
    OPEN = 'open',
    CLOSED = 'closed',
    PENDING = 'pending'
}