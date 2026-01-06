import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyRegisteredException extends HttpException {
  constructor(message: string) {
    super(message || 'User is already registered', HttpStatus.CONFLICT);
  }
}
