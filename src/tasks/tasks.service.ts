import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task-dto';

//for start the project with debug on just put
/**yarn start:dev
 *
 */

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  GetAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(CreateTaskDTO: CreateTaskDTO): Task {
    const { title, description } = CreateTaskDTO;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  UpdateTaskStatus(id: string, status: TaskStatus) {
    const tasks = this.getTaskById(id);

    tasks.status = status;

    return tasks;
  }
}
