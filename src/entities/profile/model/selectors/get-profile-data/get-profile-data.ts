import { StateSchema } from 'app/providers/store-provider';

export const getProfileData = ({ profile }: StateSchema) => profile?.data;
