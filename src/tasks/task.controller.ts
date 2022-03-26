import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('task')
export class TaskController {
  constructor(private TasksService: TasksService) {}
}
// for generate componnets like controller and modules in the same module
// always remember to put the same name on nest g.
