import { Validator } from '../protocols/validator';
import { SignUpController } from './signup';

import signupSchema from '../validators/signup/schema';

const makeSut = (): SignUpController => {
  class SignUpValidatorStub implements Validator {
    isValid(values: any): Promise<boolean> {
      return signupSchema.isValid(values);
    }
  }

  const signUpValidatorStub = new SignUpValidatorStub();
  const sut = new SignUpController(signUpValidatorStub);

  return sut;
};

describe('SignUp Controller', () => {
  test('Should return 400 if signup payload is not invalid', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        email: 'any@mail.com',
        password: '123456',
        passwordConfirmation: '123456',
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  test('Should return 200 if signup payload is valid', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: 'any name',
        email: 'any@mail.com',
        password: '123456',
        passwordConfirmation: '123456',
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
  });

  test('Should return 400 if email is valid', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: 'any name',
        email: 'anymail.com',
        password: '123456',
        passwordConfirmation: '123456',
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  test('Should return 400 if passwords do not match', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: 'any name',
        email: 'any@mail.com',
        password: '123456',
        passwordConfirmation: '1234567',
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
