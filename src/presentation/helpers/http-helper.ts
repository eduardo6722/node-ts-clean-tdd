import { HttpResponse } from '../protocols/http';

export const BadRequest = (message: string): HttpResponse => ({
  statusCode: 400,
  body: {
    message,
  },
});
