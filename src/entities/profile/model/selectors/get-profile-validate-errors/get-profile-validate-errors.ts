import { StateSchema } from 'app/providers/store-provider';

export const getProfileValidateErrors = ({ profile }: StateSchema) =>
  profile?.validateErrors;
