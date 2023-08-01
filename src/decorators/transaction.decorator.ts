import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Transaction = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToRpc().getContext().req.transaction;
  },
);
