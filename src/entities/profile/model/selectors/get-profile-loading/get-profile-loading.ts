import { StateSchema } from 'app/providers/store-provider';

export const getProfileLoading = ({ profile }: StateSchema) =>
  profile?.isLoading;
