export interface Validator {
  isValid(values: any): boolean | any;
}
