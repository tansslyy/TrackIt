import { FileValidator } from '@nestjs/common';

export class CustomImageValidator extends FileValidator {
  buildErrorMessage(): string {
    return 'File is not an image! Only jpg, jpeg, png, webp are allowed.';
  }

  isValid(file: Express.Multer.File): boolean {
    const regex = /(jpg|jpeg|png|webp)$/;

    return regex.test(file.mimetype);
  }
}
