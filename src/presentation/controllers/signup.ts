import { BadRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';
import { HttpResponse, HttpRequest } from '../protocols/http';
import { SignUpValidator } from '../validators/signup-validator';

export class SignUpController implements Controller {
  private readonly validator: SignUpValidator;

  constructor(validator: SignUpValidator) {
    this.validator = validator;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const isValid = await this.validator.isValid(httpRequest.body);

    if (!isValid) {
      return BadRequest('Fields not valid');
    }

    return {
      statusCode: 200,
      body: null,
    };
  }
}
