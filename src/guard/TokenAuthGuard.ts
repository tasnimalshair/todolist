import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { RoleGuard } from './rules.guard';
import { UserService } from 'src/user/user.service';
import { Transaction } from 'src/decorators/transaction.decorator';

@Injectable()
export class TokenAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService,
    private reflector: Reflector,
    private userService: UserService,
  ) { }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const _isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    )

    if (_isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false;
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token);

      const user = await this.userService.findById(decoded.id)

      request.user = user.dataValues;

      const roleGuard = new RoleGuard(this.reflector);

      return roleGuard.canActivate(context);

    } catch (error) {
      return false;
    }

  }

}
