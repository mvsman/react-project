import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const { name, lastname, age, username, city } = profile;
  const errors: ValidateProfileError[] = [];

  if (!name) {
    errors.push(ValidateProfileError.INCORRECT_NAME);
  }

  if (!lastname) {
    errors.push(ValidateProfileError.INCORRECT_LASTNAME);
  }

  if (!age) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
};
