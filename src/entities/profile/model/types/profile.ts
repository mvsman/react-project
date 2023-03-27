import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

export enum ValidateProfileError {
  INCORRECT_NAME = 'incorrectName',
  INCORRECT_LASTNAME = 'incorrectLastname',
  INCORRECT_AGE = 'incorrectAge',
  INCORRECT_USERNAME = 'incorrectUsername',
  INCORRECT_CITY = 'incorrectCity',
  NO_DATA = 'noData',
  SERVER_ERROR = 'serverError',
}

export interface Profile {
  name?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  dirty: boolean;
  validateErrors?: ValidateProfileError[];
}
