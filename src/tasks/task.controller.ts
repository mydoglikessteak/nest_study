import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task-dto';
import { getTaskFilterDTO } from './dto/get-task-filter-dto';

// for generate componnets like controller and modules in the same application
// always remember to put the same name on nest g controller tasks(name of the folder);
@Controller('tasks')
export class TaskController {
  constructor(private TasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDTO: getTaskFilterDTO): Task[] {
    if (Object.keys(filterDTO).length) {
      return this.TasksService.GetWithFilters(filterDTO);
    } else {
      return this.TasksService.GetAllTasks();
    }
  }

  @Get('/:id')
  GetTaskById(@Param('id') id: string): Task {
    return this.TasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.TasksService.createTask(createTaskDTO);
  }

  @Delete('/:id')
  DeleteTask(@Param('id') id: string): void {
    return this.TasksService.deleteteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.TasksService.UpdateTaskStatus(id, status);
  }
}
