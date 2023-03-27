import { StateSchema } from 'app/providers/store-provider';

export const getProfileReadonly = ({ profile }: StateSchema) =>
  profile?.readonly;
