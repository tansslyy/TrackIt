import { HttpException, HttpStatus } from '@nestjs/common';

export class IdenticalPasswordException extends HttpException {
  constructor(message?: string) {
    super('New and old password must be different', HttpStatus.BAD_REQUEST);
  }
}
