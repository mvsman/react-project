import { StateSchema } from 'app/providers/store-provider';

export const getProfileError = ({ profile }: StateSchema) => profile?.error;
