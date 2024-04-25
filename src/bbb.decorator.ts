import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { Role } from './role.decorator';
import { RoleGuard } from './role.guard';

export function Bbb(path, role) {
  return applyDecorators(Get(path), Role(role), UseGuards(RoleGuard));
}
