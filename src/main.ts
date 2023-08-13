import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenAuthGuard } from './guard/TokenAuthGuard';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
// import { HttpExceptionFilter } from './exception filter/http-exception.filter';

// Implement transaction interceptor
// Custom exception filter

// 1. We have kanban board
// 2. In each kanban board, we have a todo
// 3. User can have multiple kanban boards
// 4. User can share his kanban board with other users, & they can view it & update it, but not delete it
// 5. The kanban owner can remove access from other users


// Chat Service
// 1. Kanban owner can send broadcast messages to all kanban shared users at one-to-one
// 2. When the shared user replies, we want one-to-one conversation between the shared user and owner
// 3. A new conversation will appear between the owner & the shared user
// 4. If the shared user is removed, they will lose the chat from their side
// 5. But, it will remain with the owner
// 6. The owner can create new group messages with any users


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalGuards(
    new TokenAuthGuard(
      app.get(JwtService),
      new Reflector(),
      app.get(UserService)
    )
  );

  // app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);

}

bootstrap();