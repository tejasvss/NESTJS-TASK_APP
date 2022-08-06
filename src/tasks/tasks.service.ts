import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/createTask.dto';
import { getTaskFilterDto } from './dto/getTaskFilter.dto';


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

    deleteTaskById(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }

    updateTaskById(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }

    getTaskWithFilters(filterDto: getTaskFilterDto): Task[] {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter((task) => task.status == status)
        }
        if (search) {
            tasks = tasks.filter((task) => {
                if (task.name.includes(search) || task.description.includes(search)) {
                    return true;
                }
                return false;
            })
        }
        return tasks;
    }
}
