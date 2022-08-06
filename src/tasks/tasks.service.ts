import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/createTask.dto';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {

        const { name, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            name,
            description,
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id == id)
    }

    deleteTaskById(id: String): void {
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }
}
