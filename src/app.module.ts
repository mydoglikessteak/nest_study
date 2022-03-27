import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,

      database: 'task-management',
      autoLoadEntities: true,
      synchronous: true,
    }),
  ],
})
export class AppModule {}
