import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenAuthGuard } from './guard/TokenAuthGuard';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from './logger/logger.service';
import { TaskService } from './task/task.service';

// Create Custom Logger
// Implement transaction interceptor
// Custom exception filter 

// 1. We have kanban board
// 2. In each kanban board, we have a todo
// 3. User can have multiple kanban boards
// 4. User can share her kanban board with other users, & they can view it & update it, but not delet it
// 5. The kanban owner can remove access from other users

// 1-M kanban with tasks
// 1-M User with kanban

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalGuards(new TokenAuthGuard(
    app.get(JwtService),
    new Reflector(),
    app.get(UserService),
  ));

  app.useLogger(new LoggerService())
  await app.listen(3000);
}

bootstrap();
