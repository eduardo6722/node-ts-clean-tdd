export class CustomError {
  private statusCode: number;

  private message: string;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
