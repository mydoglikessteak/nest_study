import { Controller, Get } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TaskController {
  constructor(private TasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.TasksService.GetAllTasks();
  }
}
// for generate componnets like controller and modules in the same module
// always remember to put the same name on nest g.
