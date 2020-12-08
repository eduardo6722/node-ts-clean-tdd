/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import schema from './schema';
import { Validator } from '../../protocols/validator';

export class SignUpValidator implements Validator {
  async isValid(values: any): Promise<boolean> {
    return schema.isValid(values);
  }
}
